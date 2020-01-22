
module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              node: 11 // So NodeJS version 11 is used
              // (Though the latest/LTS version will do, too)
            }
          }
        ]
      ]
    }
  }
}
