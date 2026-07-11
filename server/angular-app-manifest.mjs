
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
    'index.csr.html': {size: 2841, hash: '13f40fbfb7b2ecd82a72b907fcca864563ddbba848b0377e4fe49f95d57d590e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1654, hash: '77295d39e0f2854d11c722d545840915413bd0b59bb8b1e9152a78071b5f71df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main-layout/home/index.html': {size: 22919, hash: '072a894fced2213733779bf0d0602809c0cae794523fe8dc198cbecd7fbd08c0', text: () => import('./assets-chunks/main-layout_home_index_html.mjs').then(m => m.default)},
    'header/index.html': {size: 12756, hash: '3295fbdb9337838bad02c29f80c1f90483ac296dbbdf4581d979ff4c83a238a0', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'main-layout/projects/index.html': {size: 39491, hash: '66356bd1a061463cd14e0b7859636faba5204c6cbf794d282be8113ba5d58a32', text: () => import('./assets-chunks/main-layout_projects_index_html.mjs').then(m => m.default)},
    'main-layout/profile/index.html': {size: 35715, hash: '0f69298567ba0971681e1b8e5c0fd1cc94ac3dec0825c6ea69c5a60d63ecb6b9', text: () => import('./assets-chunks/main-layout_profile_index_html.mjs').then(m => m.default)},
    'main-layout/contact/index.html': {size: 30928, hash: '0338c12b6242bd0cf3b37c02e71da571feef92bf4c0ea725be0657b6a5096703', text: () => import('./assets-chunks/main-layout_contact_index_html.mjs').then(m => m.default)},
    'styles-YRALTQ3K.css': {size: 25295, hash: 'ruW6dQQLG8I', text: () => import('./assets-chunks/styles-YRALTQ3K_css.mjs').then(m => m.default)}
  },
};
