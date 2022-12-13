import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import isEmpty from "lodash/isEmpty";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { assert } from "@actnowcoalition/assert";
import { useResizeObserver } from "@actnowcoalition/ui-components";

const TemplateSharePage: NextPage = () => {
  const router = useRouter();
  const { setObservedNode, observerEntry } = useResizeObserver();
  const refComponentHasWidth =
    observerEntry && observerEntry.contentRect.width > 0;

  if (isEmpty(router.query)) {
    return <span>Page loading or no query params were provided...</span>;
  }
  const { name } = router.query;
  assert(name !== undefined, "'name' query param is required but is missing.");

  return (
    <>
      <Box
        ref={setObservedNode}
        className={refComponentHasWidth ? "screenshot-ready" : undefined}
      >
        {/* Place longest-to-load component here.
          When the component is visible (has a width > 0) the screenshot-ready class will be 
          added to the box, signaling that the screenshot is ready to be captured. */}
        <Typography>{name}</Typography>
      </Box>
    </>
  );
};
export default TemplateSharePage;
