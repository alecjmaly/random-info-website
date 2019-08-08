module.exports  = async (axios, cheerio) => {
  const url = 'https://cheatsheetseries.owasp.org/';

  return axios(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      const items = $('.summary').find('li > a');

      // skipping first row
      const random_item = items[Math.floor(Math.random()*(items.length))];



      const item_name = random_item.children[0].data
      const item_url = url + random_item.attribs.href


      // // print to screen
      // console.log('Kali Tool:');
      // console.log(tool_name)
      // console.log(tool_url)
      // console.log(random_item)

      return `
        OWASP Cheat Sheet:<br>
        ${item_name}<br>
        <a href='${item_url}' target='_blank'>${item_url}</a><br>
      `
    })
    .catch(console.error);
}

