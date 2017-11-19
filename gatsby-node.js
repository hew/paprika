const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require('unist-util-select')
const fs = require('fs-extra')

// Replace trailing slashes, for instance.
// https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#choosing-the-page-layout
 
// exports.onCreatePage = ({ page, boundActionCreators }) => {
//   const { createPage, deletePage } = boundActionCreators

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.

/*
  exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
      if (page.path.match(/^\/landing-page/)) {
        // It's assumed that `landingPage.js` exists in the `/layouts/` directory
        page.layout = "landingPage"

        // Update the page.
        createPage(page)
      }

      resolve()
    })
  }
*/
