var cheerio = require('cheerio');
var axios = require('axios');

axios.get('http://search.books.com.tw/search/query/cat/3/key/gq/qsub/R03%2CS03/c/1/sort/5')
  .then(function (response) {
    // console.log(response);
    let $ = cheerio.load(response.data);
    let str = $('#searchlist ul li:first-of-type a').attr().href;
    let result =  detail_api_result(str);
  })
  .catch(function (error) {
    // console.log(error);
  });
var detail_api_result = function (api){
  const xx = "hi";
  axios.get(api)
  .then(function (response) {
    // console.log(response);
    let $ = cheerio.load(response.data);
    let obj = $('.price');
  })
  .catch(function (error) {
    // console.log(error);
  });
  return "";
}