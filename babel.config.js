module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ['nativewind/babel', { mode: 'compileOnly' }],
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', ',ts', '.tsx'],
          root: ['./src/'],
          alias: {
            '@/': './src',
            '@src': './src',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@modules': './src/modules',
            '@services': './src/services',
            '@stores': './src/stores',
            '@themes': './src/themes',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
