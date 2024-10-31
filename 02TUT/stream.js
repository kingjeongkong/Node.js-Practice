const fs = require('fs');

const rs = fs.createReadStream('./02TUT/textFile/lorem.text', { encoding: 'utf8' });

const ws = fs.createWriteStream('./02TUT/textFile/newLorem.text');

// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk);
// });

rs.pipe(ws);
