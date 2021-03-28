module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '8f643e0f07af47539c0f74b22ae88c5b',
// https://www.notion.so/jonge-s-8f643e0f07af47539c0f74b22ae88c5b
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Jonge\'s',
  domain: 'noname4me.github.io',
  author: '奴止',

  // open graph metadata (optional)
  description: 'Jonge\'s ...',
  socialImageTitle: 'Jonge\'s',
  socialImageSubtitle: 'Hi there~',

  // social usernames (optional)
  // twitter: 'blurnull',
  github: 'noname4me',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: true,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
