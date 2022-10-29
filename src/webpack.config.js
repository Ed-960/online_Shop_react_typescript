const path = require('path')

module.exports = {
   entry: './index.tsx',
   output: {
      filename: 'bundle.tsx',
      path: path.resolve(__dirname, 'dist')
   }
}

