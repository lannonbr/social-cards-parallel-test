# social-cards-parallel-test

A workflow of building a site using a Static Site Generator (Gatsby in this example) alongside building opengraph images in parallel and then merging the artifacts together and deploying to production.

It uses the GitHub Actions `jobs` functionality where you can run multiple tasks in parallel. This can speed up workflow times up at least to the longest of the site build or the opengraph image generation rather than doing them sequentially.
