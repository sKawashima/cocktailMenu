import puppeteer from 'puppeteer'

const getCocktailList = async (page, url) => {
  await page.goto(
    "http://www.sakelog.com/cocktails/search/%E3%82%B8%E3%83%B3/1"
  )
  const elementsList = await page.evaluate(() => {
    document.getElementsByClassName('itembox')
    console.log(document.getElementsByClassName("itembox"))
  })
  // const cocktailList = await elementsList.map(element => {
  //   return element.getElementsByTagName('a')[0].href
  // })
  return elementsList;
}

const test = async () => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const cocktailList = await getCocktailList(
      page,
      'http://www.sakelog.com/cocktails/search/%E3%82%B8%E3%83%B3/1'
    )
    await console.dir(JSON.stringify(cocktailList))

    browser.close()
  } catch (e) {
    console.error(e)
  }
}

test()
