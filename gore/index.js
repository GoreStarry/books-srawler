const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
// axios
//   .get('http://search.books.com.tw/search/query/cat/3/qsub/R03/key/GQ+%E6%9C%88%E8%99%9F/sort/5/c/0')
//   .then((res) => {
//     fs.writeFileSync('./test_html.txt', res.data, 'utf8');
//     parseHtml(res.data)
//   })




const test_html = fs.readFileSync(path.resolve(__dirname, './test_html.txt'), 'UTF-8')

parseHtml(test_html);

function parseHtml(html) {
  $ = cheerio.load(html);
  const all_title = $('.item h3').text();
  console.log(all_title);
}
