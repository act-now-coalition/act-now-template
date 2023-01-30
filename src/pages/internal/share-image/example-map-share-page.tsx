import { useRef, useState } from "react";

import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import isEmpty from "lodash/isEmpty";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { assert } from "@actnowcoalition/assert";
import {
  MetricScoreOverview,
  MetricUSNationalMap,
  useMutationObserver,
} from "@actnowcoalition/ui-components";

import {
  MapShareWrapper,
  Placeholder,
  ScreenshotWrapper,
} from "components/Containers";
import { regions } from "src/utils/regions";
import { searchDomForClass } from "src/utils/share-pages";

const ExampleMapSharePage: NextPage = () => {
  const router = useRouter();
  const ref = useRef<Element>(null);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const handleMutations: MutationCallback = (mutations: MutationRecord[]) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        searchDomForClass(mutation.target as Element, setIsLoaded);
      }
    }
  };
  useMutationObserver(ref, handleMutations, { childList: true, subtree: true });

  if (isEmpty(router.query)) {
    return (
      <span>
        Page loading or no query params were provided. Expects params: metric
      </span>
    );
  }
  const { metric } = router.query;
  assert(typeof metric === "string", "metric parameter should be a string");

  return (
    <ScreenshotWrapper className="screenshot">
      <Stack direction={"row"} spacing={2} width={"75%"} margin="auto">
        <MetricScoreOverview
          metric={metric}
          region={regions.findByRegionIdStrict("12")}
        />
        <Placeholder sx={{ minHeight: "90px" }} width={"100%"} />
      </Stack>
      <Box ref={ref} className={isLoaded ? "screenshot-ready" : undefined}>
        {/* Place slowest-to-load Metric-aware component here (like MetricUSNationalMap 
            below). The mutation observer will detect when the component is loaded
            and signal that the screenshot is ready to be taken. If not using 
            any Metric-aware components, you can remove the mutation observer
            logic and just set the parent className to screenshot-ready.*/}
        <MapShareWrapper>
          <MetricUSNationalMap metric={metric} regionDB={regions} />
        </MapShareWrapper>
      </Box>
    </ScreenshotWrapper>
  );
};
export default ExampleMapSharePage;
