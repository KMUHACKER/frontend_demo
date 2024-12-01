const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
    const config = await getDefaultConfig(__dirname);
    config.resolver.assetExts.push('cjs'); // 확장자 문제 해결
    return config;
})();