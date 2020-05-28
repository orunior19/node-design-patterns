const fileSystem = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fileSystem.readFile)

const fileContent = fileSystem.readFileSync(__filename);
console.log('fileContent', fileContent);
console.log('test 1');

readFilePromise(__filename)
.then(fileData => console.log('fileData => ', fileData));

// fileSystem.readFile(__filename, (err, data) => {
//     console.log('async fileContent: ', data);
// });

console.log('test 2');