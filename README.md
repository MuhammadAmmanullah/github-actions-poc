# github-actions-poc

## GitHub Actions modules

The example workflows are in `.github/workflows/`. They cover push and pull
request events, a five-minute schedule, manual dispatch, repository dispatch,
contexts and conditionals, repository configuration values, multi-OS and
self-hosted runners, a Node.js matrix, npm caching, and PostgreSQL/Redis
service containers.

The Module 7 action source is in `custom-js-action/`. Build it with
`npm install` followed by `npm run build` from that directory. The workflow
uses this in-repository copy so it can run immediately. To satisfy the separate
repository/tag portion of the exercise, publish the directory as its own
`custom-js-action` repository, push tag `v1.0.0`, and update the workflow's
`uses` value as described in that directory's README.

The Module 4 workflow checks for `DEMO_VARIABLE` and `DEMO_SECRET` without
printing their values. Add those as repository variables/secrets if you want
the workflow to report them as configured. The self-hosted workflow requires
an online Linux runner labeled `self-hosted` and `linux`.