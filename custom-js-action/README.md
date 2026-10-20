# Custom JavaScript Action

This action demonstrates a minimal JavaScript action built with `@vercel/ncc`.

## Build

Run `npm install` and then `npm run build`. Commit `dist/index.js` with the action
so GitHub can execute it without installing dependencies at runtime.

## Publish as a separate repository

To publish the requested `custom-js-action` repository, push the contents of
this directory to a repository named `custom-js-action` under your GitHub
account, then create and push the `v1.0.0` tag. The main repository currently
invokes this action from the checked-out `./custom-js-action` directory; after
publishing, it can instead use `OWNER/custom-js-action@v1.0.0`.
