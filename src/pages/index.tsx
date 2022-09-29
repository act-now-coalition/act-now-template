import type { NextPage } from "next";
import Homepage from "src/screens/Homepage";
import { cms, Page, PageJSON } from "src/cms";

const Home: NextPage<{ pageJSON: PageJSON }> = ({ pageJSON }) => {
  const page = Page.fromJSON(pageJSON);
  return (
    <main>
      <Homepage page={page} />
    </main>
  );
};

export const getStaticProps = async () => {
  const page = cms.getPageById("homepage");
  return { props: { pageJSON: page.toJSON() } };
};

export default Home;
