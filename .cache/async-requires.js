// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-404-js": () => import("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/johndurso/Desktop/gatsby-app/personal-gatsbyjs/.cache/data.json")

