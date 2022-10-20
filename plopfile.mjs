/**
 * Plop is a tool that saves time and helps scaffolding code with consistency.
 *
 * See https://plopjs.com/documentation/ for more details.
 */
import _ from "lodash";

const templateSharePage = prepareTemplate(`
import { useResizeObserver } from "@actnowcoalition/ui-components"
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Box } from "@mui/system";
import isEmpty from "lodash/isEmpty";

const {{pascalCase name}}SharePage: NextPage = () => {
  const router = useRouter();
  const { ref, observerEntry } = useResizeObserver();
  const refComponentHasWidth =
    observerEntry && observerEntry.contentRect.width > 0;

  if (isEmpty(router.query)) {
    return <span>Page loading or no query params were provided...</span>;
  }
  const { {{queryParams}} } = router.query;
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

const templateSharePageListItem = prepareTemplate(`
          <ListItem>
            <Link href="/internal/share-image/{{pascalCase name}}SharePage?">{{name}}</Link>
          </ListItem>
          $1`);

export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  const internalPagePath = "src/pages/internal";
  plop.setGenerator("share-page", {
    description:
      "Creates a share page with given name and URL query parameters.",
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
        message: "Expected URL query params (comma separated).",
        example: "metric, showCounties",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${internalPagePath}/share-image/{{pascalCase name}}SharePage.tsx`,
        template: templateSharePage,
      },
      {
        path: `${internalPagePath}/index.tsx`,
        pattern: /({\/\* ADD SHARE PAGES HERE \*\/})/g,
        template: templateSharePageListItem,
        type: "modify",
      },
    ],
  });
}

function prepareTemplate(srcTemplate) {
  return _.trimStart(srcTemplate);
}
