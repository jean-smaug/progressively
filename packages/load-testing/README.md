## What is this package?

[Progressively](https://github.com/progressively-crew/progressively) comes with heuristics aiming to provide flag variations to users depending on their attributes.

While it's easy to verify the behaviour in E2E tests and unit tests, these tests are very "arranged" and concern only one user at a time.

The `load-testing` package aims to provide a way to run tests that cover less "business" scope than E2E ones, but with a configurable number of client applications, on different browsers.

They mostly aim to verify that the flag provided to the N users are the good ones, even after a websocket update.

## How to start the load tests?

- You first need to follow the [Raw installation guide](https://docs.progressively.app/start-with-self-hosted/quick-start)
- Then, start the backend using `pnpm run dev` in the `./packages/backend`
- Then start the dedicated client application running `pnpm start` in `./packages/load-testing`
- Finally, run one of the following command:
  - `pnpm run test:chromium`
  - `pnpm run test:firefox`
  - `pnpm run test:webkit`

You can adjust the number of clients by running something like `USER_COUNT=100 pnpm run test:chromium`
