import { Region } from "@actnowcoalition/regions";

const SITE_URL = "https://www.covidactnow.org"; // Does this exist already at an app-wide level?

export function getLocationShareLink(region: Region) {
  const url = `${SITE_URL}/us/${region.slug}`; // TODO: add relative URL using new regionDb getRegionUrl()
  const body = JSON.stringify({
    url: url,
    title: `Covid Act Now - ${region.fullName}`, // Make this text configurable?
    description: `Covid Act Now - ${region.fullName}`,
    imageUrl: "https://i.imgur.com/QgascpJ.jpeg", // Link this to a dynamic share image eventually
  });
  // The registerUrl endpoint updates and returns the existing URL if a document for the given URL already exists.
  // TODO: seems wasteful to have to call the "register" API every time just to get the share URL.
  // But, this does mean that the share image screenshot will be updated every page load.
  // This means that the share image will always be up to date, but that we're also taking
  // many many more screenshots than is necessary.

  // It might be better to take/update the screenshots when the share link is clicked (when the redirect
  // firebase function is called) if we're going to be fetching/updating the share image URL every page load.
  const shareUrl = fetch(
    "https://us-central1-test-url-api.cloudfunctions.net/api/registerUrl",
    {
      body: body,
      headers: { "Content-Type": "application/json" },
      method: "POST",
    }
  )
    .then((response) => {
      if (!response.ok) {
        return SITE_URL; // Fallback to the default URL if the API fails
      } else {
        return response.text();
      }
    })
    .catch(() => {
      return undefined;
    }); // Fix error propagation--but probably won't be going this route anyway?

  return shareUrl;
}
