[![Status](https://drone.squarespace.net/api/badges/WEBM/creative-sandbox/status.svg)](https://drone.squarespace.net/WEBM/creative-sandbox)

# creative-sandbox

A sandbox environment for the creative team developers for usage within www.

## Running locally
```bash
# From project root
npm install
npm run build # Necessary to generate typings
npm run watch
```

This will recompile the library on any code changes.

To see any changes, either one of these host applications needs to be run:
1. Local development
2. Installed on www (shows navigation and footer)

### Local development

Run the following from the root of the project:

```bash
npm run start
```

The app should then be running at http://localhost:1337. This mode incorporates
all default styles including the grid overlay of www, but leaves out the navigation.

### Installed on www
Start the `build:watch` script for the sandbox, which differs from the `start`
script by creating actual copies of the files:
```bash
npm run build:watch
```

Then, from within www, update the package.json to specify the filepath to this
local repo, for example:

```json
"dependencies": {
  "@sqs/creative-sandbox": "file:../creative-sandbox"
}
```

Install the newly updated package.json:
```bash
npm install
```

After this, follow the directions in the www readme to run www:
```bash
npm run server

# in a new tab
npm run watch
```

Changes should be picked up by www and updates should be consumed as the sandbox
code is saved by both watch scripts. This process should be followed before
publishing.

## Adding images
The image generation script (`npm run generate:images`) will take JPGs and PNGs from `/images` and create responsive versions in the sizes 100, 300, 500, 750, 1000, 1500, and 2500 pixels, and deposit them in `dist/images`.

You will manually upload these images to the [Creative Sandbox GCS bucket](https://console.cloud.google.com/storage/browser/fdfc-www-prod-001-media-www/images/pages/creative-sandbox) in the appropriate folder and then delete them from the repo.

Once uploaded, they can be displayed via the `Image` component which will select the most optimal image size for the device that is loading it. The src path corresponds to the original file name and folder structure inside the bucket.

For different sources on different devices, follow [this example](https://github.com/sqsp/www/blob/master/src/pages/flagship/invoicing/sections/Invoices/Design.tsx#L7-L8):


## Translations
All strings that are added to this project should be in a `strings.ts` file, wrapped in
frontsite's translation directives, eg:

```js
sl_tr_start()
export default {
  helloWorld: 'Hello World'
}
sl_tr_end()
```

These can then be imported and used as if it were a constant in an object.


## Publishing

Merges to master will automatically pubish the package on a version bump.
- Commit the following to the master branch
  (as a separate PR or along with the code change):
  - An updated version number in [package.json](../package.json)
    (adhere to [Semantic Versioning](https://semver.org/)).
  - Similarly updated versions in [package-lock.json](./package-lock.json)
    (in two places, both close to the top of the file).
  - A list of changes in [CHANGELOG.md](./CHANGELOG.md)
    (adhere to [Common Changelog](https://common-changelog.org/)).

## Support
This app belongs to #frontsite and the development team within Creative

## Documentation

All Markdown files located in the `/docs` directory build and publish to Backstage at https://backstage.squarespace.net/catalog/default/component/creative-sandbox/docs. You can find more information in [Backstage TechDocs](https://backstage.squarespace.net/catalog/default/component/backstage/docs/guides/publish-docs-to-backstage/).
