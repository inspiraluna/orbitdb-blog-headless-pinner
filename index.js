import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:8080/');

  page
  .on('console', message =>
    console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
  .on('pageerror', ({ message }) => console.log(message))
  .on('response', response =>
    console.log(`${response.status()} ${response.url()}`))
  .on('requestfailed', request =>
    console.log(`${request.failure().errorText} ${request.url()}`))
//   await page.goto('https://developers.google.com/web/');

  // Type into search box.
 /* await page.type('.devsite-search-field', 'Headless Chrome');

  // Wait for suggest overlay to appear and click "show all results".
  const allResultsSelector = '.devsite-suggest-all-results';
  await page.waitForSelector(allResultsSelector);
  await page.click(allResultsSelector);

  // Wait for the results page to load and display the results.
  const resultsSelector = '.gsc-results .gs-title';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  const links = await page.evaluate(resultsSelector => {
    return [...document.querySelectorAll(resultsSelector)].map(anchor => {
      const title = anchor.textContent.split('|')[0].trim();
      return `${title} - ${anchor.href}`;
    });
  }, resultsSelector);

  // Print all the files.
  console.log(links.join('\n'));*/

  // await browser.close();
})();