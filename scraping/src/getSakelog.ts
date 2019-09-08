import Puppeteer from 'puppeteer'
import { async } from 'q'

export const getCocktailList = async (listPageUrl:string) => {
  const browser = await Puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(listPageUrl)
  const elementsList = await page.evaluate(() => {
    const urlList:string[] = []
    for (let i = 0; i < document.getElementsByClassName('itembox').length; i++) {
      urlList.push(document.getElementsByClassName('itembox')[i].getElementsByTagName('a')[0].href)
    }
    return urlList
  })

  browser.close()
  return elementsList
}

interface Material {
  name:string,
  amount:string,
}

interface Cocktail {
  name:string,
  taste:string,
  alcohol:string,
  base:string,
  materials:Material[],
  recipe:string,
  glass:string,
  color:string,
  source:string,
  sourceUrl:string,
}

export const getCocktailDetail = async (baseSpirits:string, url:string) => {
  const browser = await Puppeteer.launch()
  const page = await browser.newPage()

  console.log(`GET: ${url}`)
  await page.goto(url)

  const pageData = await page.evaluate(() => {
    const returnData:any = {}
    const recipeType = (<HTMLElement>document.getElementsByClassName('recipetype')[1]).innerText

    returnData.name = (<HTMLElement>document.getElementsByClassName('detail-head')[0].getElementsByTagName('h1')[0]).innerText

    const _taste = (/テイスト\t(.+口)/gi).exec(recipeType)
    returnData.taste = _taste ? _taste.pop() : ''

    const _alcohol = (/アルコール度数\t(.+)\n製法/gi).exec(recipeType)
    returnData.alcohol = _alcohol ? _alcohol.pop() : ''

    // TODO: 扱い後で考える
    // const base = baseSpirits

    const materials:Material[] = []
    const materialList = document.getElementsByClassName('recipe')[1].getElementsByTagName('td')
    for (let i  = 0; i < materialList.length; i += 2) {
      const material:Material = {
        name: materialList[i].innerText,
        amount: materialList[i + 1].innerText,
      }
      materials.push(material)
    }
    returnData.materials = materials

    const _recipe = (<HTMLElement>document.getElementsByClassName('recipe')[2].nextElementSibling)
    returnData.recipe = _recipe ? _recipe.innerText : ''

    const _glass = (/グラス\t(.+)\nテイスト/gi).exec(recipeType)
    returnData.glass = _glass ? _glass.pop() : ''

    const _color = (/色\t(.+)\nアルコール度数/gi).exec(recipeType)
    returnData.color = _color ? _color.pop() : ''

    returnData.source = document.getElementsByTagName('title')[0].innerText

    return returnData
  })

  browser.close()

  const cocktail:Cocktail = {
    name: pageData.name,
    taste: pageData.taste,
    alcohol: pageData.alcohol,
    base: baseSpirits,
    materials: pageData.materials,
    recipe: pageData.recipe,
    glass: pageData.glass,
    color: pageData.color,
    source: pageData.source,
    sourceUrl: url
  }

  return cocktail
}
