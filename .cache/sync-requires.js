const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/index.js"))),
  "component---src-pages-third-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/third.js"))),
  "component---src-pages-second-js": hot(preferDefault(require("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/second.js")))
}

