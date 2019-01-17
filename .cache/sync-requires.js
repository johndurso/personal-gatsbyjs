const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/index.js")))
}

