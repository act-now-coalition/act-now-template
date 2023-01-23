import { Box } from "@mui/system";
import isEmpty from "lodash/isEmpty";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { assert } from "@actnowcoalition/assert";
import {
  MetricUSNationalMap,
  useResizeObserver,
} from "@actnowcoalition/ui-components";

import { regions } from "src/utils/regions";

const MapPageSharePage: NextPage = () => {
  const router = useRouter();
  const { setObservedNode, observerEntry } = useResizeObserver();
  const refComponentHasWidth =
    observerEntry && observerEntry.contentRect.width > 0;

  if (isEmpty(router.query)) {
    return <span>Page loading or no query params were provided...</span>;
  }
  const { metric } = router.query;
  assert(typeof metric === "string", "metric should be a string");

  return (
    <>
      <Box
        ref={setObservedNode}
        className={refComponentHasWidth ? "screenshot-ready" : undefined}
      >
        <MetricUSNationalMap
          metric={metric}
          regionDB={regions}
          getTooltip={(region) => region}
        />
      </Box>
    </>
  );
};
export default MapPageSharePage;
