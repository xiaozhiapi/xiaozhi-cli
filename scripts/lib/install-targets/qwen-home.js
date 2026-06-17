const { createInstallTargetAdapter } = require('./helpers');

module.exports = createInstallTargetAdapter({
  id: 'qwen-home',
  target: 'qwen',
  kind: 'home',
  rootSegments: ['.qwen'],
  installStatePathSegments: ['xiaozhi-install-state.json'],
  nativeRootRelativePath: '.qwen',
});
