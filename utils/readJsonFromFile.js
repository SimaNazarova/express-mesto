const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .catch(() => {
    throw new Error(`file ${path} is not found`);
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      throw new Error('Json is invalid');
    }
  });

module.exports = readJson;
