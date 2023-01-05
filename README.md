# Act Now Template

## Getting Started

This web application is based on [Next.js](https://nextjs.org/).

To start, install the project dependencies:

```sh
yarn
```

Run the development server:

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO

To set up your Act Now website based on the template, you'll want to:

- [ ] Set site-wide configuration options.
  - [ ] [CMS Setup](#cms-setup)
  - [ ] Update title, meta tags, etc. in [src/pages/\_app.tsx](./src/pages/_app.tsx).
  - [ ] Customize theme (TBD).
  - [ ] Update [public/favicon.ico](./public/favicon.ico)
  - [ ] Set up analytics.
- [ ] Set up regions in [utils/regions.ts](./utils/regions.ts).
- [ ] Set up [routing.ts](./src/utils/routing.ts).
- [ ] Set up metrics in [utils/metrics.ts](./utils/metrics.ts).
- [ ] Customize home page in [screens/Homepage/Homepage.tsx](./screens/Homepage/Homepage.tsx).
- [ ] Customize [location pages](./src/screens/Location/Location.tsx).

### CMS Setup

This template comes pre-configured to use [Netlify CMS](https://www.netlifycms.org/) as Content Management System, with GitHub as an authentication provider.

Using GitHub to authenticate CMS users requires a server handling the authentication flow. We use [Vercel](https://vercel.com/) serverless functions to handle the authentication flow. See [`src/pages/api/auth.js`](./src/pages/api/auth.js) and [`src/pages/api/callback.js`](./src/pages/api/callback.js).

#### Step-By-Step Instructions

1. Create a [GitHub OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app). This application will be used to authenticate your CMS users. For example, if the URL of the production deployment of your app is `https://act-now-template.vercel.app`, you will need to set the following fields when creating the app.

   - Homepage URL: `https://act-now-template.vercel.app/admin/`
   - Authorization callback URL: `https://act-now-template.vercel.app/api/callback`

   Upon creating the app, you will get the _Client ID_ of the GitHub OAuth App. You will also need to create a _Client secret_ before the next step (the client secret can only be seen once, make sure to store it securely).

2. Go to the project in Vercel. Go to _Settings → Environment Variables_ and create the following environment variables (for the _Production_ environment if you use `develop` to edit the CMS content).

   ```env
   ORIGIN=act-now-template.vercel.app
   COMPLETE_URL=https://act-now-template.vercel.app/api/callback
   OAUTH_CLIENT_ID=xxxx
   OAUTH_CLIENT_SECRET=xxxx
   ```

3. Update the [CMS configuration](./public/admin/config.yml), making sure to point to your repository and to the branch that you want to use as preview.

   ```yml
   backend:
     name: github
     repo: covid-projections/act-now-template
     branch: develop
     base_url: https://act-now-template.vercel.app
     auth_endpoint: api/auth
   ```

   The CMS interface will be available at `https://act-now-template.vercel.app/admin/`

## Update Act Now Package Dependencies

This template repository comes with a handy built-in script that automatically updates Act Now package dependencies. To update Act Now package dependencies, simply run `update-act-now-packages.sh` script located in the root directory.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [MUI](https://mui.com/) - React UI library.
