# Act Now template

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
  - [ ] CMS Setup
    - [ ] Create a [GitHub OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) so the CMS can use GitHub as an authentication provider
    - [ ] Add environment variables in Vercel (`OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET`), using the app client ID and secret respectively.
    - [ ] Create the `cms-content-entry` branch (from `develop`)
    - [ ] Update the CMS configuration [public/admin/config.yml](./public/admin/config.yml)
    - [ ] Open the CMS locally and update the content [http://localhost:3000/admin/index.html](http://localhost:3000/admin/index.html)
  - [ ] Update title, meta tags, etc. in [src/pages/\_app.tsx](./src/pages/_app.tsx).
  - [ ] Customize theme (TBD).
  - [ ] Update [public/favicon.ico](./public/favicon.ico)
  - [ ] Set up analytics.
- [ ] Set up regions in [utils/regions.ts](./utils/regions.ts).
- [ ] Set up [routing.ts](./src/utils/routing.ts).
- [ ] Set up metrics in [utils/metrics.ts](./utils/metrics.ts).
- [ ] Customize home page in [screens/Homepage/Homepage.tsx](./screens/Homepage/Homepage.tsx).
- [ ] Customize [location pages](./src/screens/Location/Location.tsx).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [MUI](https://mui.com/) - React UI library.
