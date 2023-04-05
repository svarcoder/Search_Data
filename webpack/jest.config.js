module.exports = {
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/', '\\.(html|css|json|svg|yml|yaml)$'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.tsx?$': '/node_modules/ts-jest/preprocessor.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '/svgTransform.js',
  },
}
