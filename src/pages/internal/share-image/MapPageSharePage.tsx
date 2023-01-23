import { useRef } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import isEmpty from "lodash/isEmpty";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { assert } from "@actnowcoalition/assert";
import { MetricUSNationalMap } from "@actnowcoalition/ui-components";

import { regions } from "src/utils/regions";

const MapPageSharePage: NextPage = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const isLoaded = ref?.current?.children[0].className === "component-loaded";
  console.log(ref?.current?.children[0]);

  if (isEmpty(router.query)) {
    return <span>Page loading or no query params were provided...</span>;
  }
  const { metric } = router.query;
  assert(typeof metric === "string", "metric should be a string");

  return (
    <>
      <Box className="screenshot">
        <Typography variant="h2">Map Share Page</Typography>
        <Box ref={ref} className={isLoaded ? "screenshot-ready" : undefined}>
          <MetricUSNationalMap
            metric={metric}
            regionDB={regions}
            getTooltip={(region) => region}
          />
        </Box>
      </Box>
    </>
  );
};
export default MapPageSharePage;
