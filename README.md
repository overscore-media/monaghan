# Monaghan

> A simple-yet-elegant website template made using Nuxt.js and Bulma.

> Includes a blog powered by Netlify CMS

## Helpful Yarn/NPM Scripts

```bash
# Install all the project's Node.js dependencies
$ yarn # or
$ npm install

# Upgrade dependencies in package.json and yarn.lock to their latest versions
$ yarn upgrade --latest # or
$ npm update

# Run ESLint to check the code for style compliance/formatting
$ yarn lint # or
$ npm run lint

# Attempt to fix code linting errors with ESLint
$ yarn fix # or
$ npm run fix

# Spin up a development server (on http://localhost:1234, by default)
$ yarn dev # or
$ npm run dev

# Build production-ready code and start Webpack Monitor
$ yarn build # or
$ npm run build

# Serve some production-ready code (you'll have to build it first)
$ yarn start # or
$ npm run start

# Generate a static site (in the /dist directory)
$ yarn generate # or
$ npm run generate
```

## Important Files:
- app.html (the main HTML file upon which every page is constructed; includes Netlify CMS scripts)
- yarn.lock (Yarn lockfile)
- README.md (this file!)
- package.json (lists Node.js dependencies and time-saving scripts)
- nuxt.config.json (Nuxt's main config file)
- .gitignore (tells Git what files it should add to commits)
- .eslintrc.js (contains some basic config for ESLint, along with some style rules for it to enforce)
- .babelrc (Babel configuration - mostly used for Prism.js at this point)

## Important Folders:
- /static (assets like favicons that get hosted at the root of the site - https://monaghan.overscore.media/icon.png or whatever)
- /plugins (Vue.js plugin initialization - probably don't need to touch unless adding a new plugin)
- /pages (.vue files that Nuxt converts to pages - index.html is the default root page in each folder)
- /node_modules (the spooky folder where Node.js stores an obscene amount of other people's code as dependencies - look but don't touch)
- /layouts (Nuxt.js layouts - probably don't need to touch unless adding a new layout)
- /dist (where the static site's content lives - after it's built with ```yarn generate```)
- /components (where .vue components are stored)
- /assets (where assets like images, styles, and fonts reside)
- /.nuxt (another spooky folder, this time full of auto-generated Nuxt.js code that doesn't need to be touched)

## Things to Fix/Add:

- A custom 404 Error page would be nice...
- Unit tests with Jest.js
