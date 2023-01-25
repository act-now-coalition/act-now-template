import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import isEmpty from "lodash/isEmpty";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { assert } from "@actnowcoalition/assert";
import {
  MetricUSNationalMap,
  MetricValue,
} from "@actnowcoalition/ui-components";

import { useMutationObserver } from "../../../utils/mutation-observer";
import { MapShareWrapper, ScreenshotWrapper } from "components/Containers";
import { regions } from "src/utils/regions";

const MapPageSharePage: NextPage = () => {
  const router = useRouter();
  const ref = useRef<Element>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleMutations = useCallback((mutations: MutationRecord[]) => {
    mutations.forEach((target) => {
      if (target) {
        searchTreeForClass(target as unknown as Element, setIsLoaded);
      }
    });
  }, []);

  useMutationObserver({
    ref,
    callback: handleMutations,
    options: { childList: true, subtree: true },
  });

  if (isEmpty(router.query)) {
    return <span>Page loading or no query params were provided...</span>;
  }
  const { metric } = router.query;
  assert(typeof metric === "string", "metric should be a string");

  return (
    <ScreenshotWrapper className="screenshot" alignContent={"center"}>
      <Typography variant="h2">Map Share Page</Typography>
      <MetricValue
        metric={metric}
        region={regions.findByRegionIdStrict("12")}
      />
      <Box ref={ref} className={isLoaded ? "screenshot-ready" : undefined}>
        <MapShareWrapper>
          <MetricUSNationalMap metric={metric} regionDB={regions} />.
        </MapShareWrapper>
      </Box>
    </ScreenshotWrapper>
  );
};
export default MapPageSharePage;

const searchTreeForClass = (
  element: Element,
  callback: Dispatch<SetStateAction<boolean>>,
  className = "component-loaded"
) => {
  Array.from(element.children).forEach((child) => {
    searchTreeForClass(child, callback);
  });
  if (element.classList.contains(className)) {
    callback(true);
  }
};
