const fs = require('fs');

// remove `gatsby-source-notion-database` and `notabag` type:module
function removeType(file) {
  const res = JSON.parse(fs.readFileSync(file));
  delete res.type;
  fs.writeFileSync(file, JSON.stringify(res, null, 2));
}
removeType('./node_modules/gatsby-source-notion-database/package.json')
removeType('./node_modules/notabase/package.json')

console.log('prepare done ~')