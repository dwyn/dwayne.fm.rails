const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/dwyn/Development/code.2/dwayne.FM.rails/client/src/pages/index.js")))
}

