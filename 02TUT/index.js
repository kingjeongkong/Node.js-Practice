const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    // 파일 경로 수정
    const data = await fsPromises.readFile(path.join(__dirname, 'textFile', 'number.text'), 'utf8');
    console.log(data);

    // 파일 삭제
    await fsPromises.unlink(path.join(__dirname, 'textFile', 'number.text'));

    // 파일 쓰기
    await fsPromises.writeFile(path.join(__dirname, 'textFile', 'promiseWrite.text'), data);

    // 파일에 내용 추가
    await fsPromises.appendFile(
      path.join(__dirname, 'textFile', 'promiseWrite.text'),
      '\n\nNice to meet you'
    );

    // 파일 이름 변경
    await fsPromises.rename(
      path.join(__dirname, 'textFile', 'promiseWrite.text'),
      path.join(__dirname, 'textFile', 'promiseComplete.text')
    );

    // 변경된 파일 읽기
    const promiseData = await fsPromises.readFile(
      path.join(__dirname, 'textFile', 'promiseComplete.text'),
      'utf8'
    );
    console.log(promiseData);
  } catch (error) {
    console.error(error);
  }
};

fileOps();

// 예외 처리 코드
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});

// fs.readFile(path.join(__dirname, 'textFile', 'number.text'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(path.join(__dirname, 'textFile', 'reply.text'), 'Nice to meet you.', (err) => {
//   if (err) throw err;
//   console.log('Write Complete');

//   fs.appendFile(path.join(__dirname, 'textFile', 'reply.text'), '\n\nTest.', (err) => {
//     if (err) throw err;
//     console.log('Test Complete');

//     fs.rename(
//       path.join(__dirname, 'textFile', 'reply.text'),
//       path.join(__dirname, 'textFile', 'newReply.text'),
//       (err) => {
//         if (err) throw err;
//         console.log('Rename Complete');
//       }
//     );
//   });
// });
