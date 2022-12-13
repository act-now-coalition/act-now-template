import type { NextPage } from "next";
import { Page, PageJSON, cms } from "src/cms";
import Homepage from "src/screens/Homepage";

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
