import { useQueryParams, useResizeObserver } from "src/utils/sharing";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { assert } from "@actnowcoalition/assert";

const TemplateSharePage: NextPage = () => {
  const router = useRouter();
  const params = useQueryParams(router);
  const { ref, observerEntry } = useResizeObserver();
  const refComponentHasWidth =
    observerEntry && observerEntry.contentRect.width > 0;

  if (!params) {
    return <span>Page loading or no query params were provided...</span>;
  }
  const { name } = params;
  assert(name !== undefined, "'name' query param is required but is missing.");

  return (
    <>
      <Box
        ref={ref}
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
