
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/portfolio/main-layout",
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/header"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio/main-layout/home",
    "route": "/portfolio/main-layout"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/main-layout/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/main-layout/profile"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/main-layout/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/main-layout/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2841, hash: 'c67ab6efd16b35218b04f440b3cb6672d08866b054da91dced425fe56f6c1a26', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1654, hash: '1eb57068b40cf9d2611dac150166cd20bd5902b5915fb7fdee9d67a08390941e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main-layout/home/index.html': {size: 23386, hash: '891ec8d9093c1a7adbb933e358d8bde89f42b11204cf6192efb3178651e95ab8', text: () => import('./assets-chunks/main-layout_home_index_html.mjs').then(m => m.default)},
    'header/index.html': {size: 12723, hash: '50d0bbfbde4665e11b0631e74d46ea832de0eedaaa61b73c11284d4734650c39', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'main-layout/projects/index.html': {size: 40231, hash: 'a0ce0b9da564f3f3207320df1514ce5801744e12c9f77437c6cc0a9869070e8c', text: () => import('./assets-chunks/main-layout_projects_index_html.mjs').then(m => m.default)},
    'main-layout/profile/index.html': {size: 35034, hash: '46892eb437d6aa9bf88b1f35fd383b67df9c1cc99de6f47b189e4eb93d7d56c0', text: () => import('./assets-chunks/main-layout_profile_index_html.mjs').then(m => m.default)},
    'main-layout/contact/index.html': {size: 31732, hash: 'ae3419a6436ed3ae69320df519f4b989f017b1e3c2bbe3fab1b7f52103b099b4', text: () => import('./assets-chunks/main-layout_contact_index_html.mjs').then(m => m.default)},
    'styles-LMMVLF4X.css': {size: 25416, hash: '3KxzoAg9FoA', text: () => import('./assets-chunks/styles-LMMVLF4X_css.mjs').then(m => m.default)}
  },
};
