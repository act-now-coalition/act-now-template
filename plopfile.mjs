/**
 * Plop is a tool that saves time and helps scaffolding code with consistency.
 *
 * See https://plopjs.com/documentation/ for more details.
 */
import _ from "lodash";

const templateSharePage = prepareTemplate(`
import { useQueryParams, useResizeObserver } from "src/utils/sharing";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Box } from "@mui/system";

const {{pascalCase name}}SharePage: NextPage = () => {
  const router = useRouter();
  const params = useQueryParams(router);
  const { ref, observerEntry } = useResizeObserver();
  const refComponentHasWidth =
    observerEntry && observerEntry.contentRect.width > 0;

  if (!params) {
    return <span>Page loading or no query params were provided...</span>;
  }

  const { {{queryParams}} } = params;
  // Add an assertion that expected URL query params exist here.

  return (
    <>
      <Box
        ref={ref}
        className={refComponentHasWidth ? "screenshot-ready" : undefined}
      >
        {/* Place longest-to-load component here. 
          When the component is visible (has a width > 0) the screenshot-ready class will be 
          added to the box, signaling that the screenshot is ready to be captured. */}
      </Box>
    </>
  );
};
export default {{pascalCase name}}SharePage;
 `);

export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  const shareImagePagePath = "src/pages/internal/share-image";
  plop.setGenerator("share-page", {
    description: "Creates a component module with stories, styles and index.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Share page name",
        example: "UsMap",
      },
      {
        type: "input",
        name: "queryParams",
        message: "Expected URL query params (comma separated)",
        example: "metric, showCounties",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${shareImagePagePath}/{{pascalCase name}}SharePage.tsx`,
        template: templateSharePage,
      },
    ],
  });
}

function prepareTemplate(srcTemplate) {
  return _.trimStart(srcTemplate);
}
