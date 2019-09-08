import * as getSakelog from './getSakelog'
import {upload} from '../src/uploadToFirebase'

const scrapingSakelog = async (baseUrl:string, maxPageNumber:number, baseSpirits:string) => {
  for (let i = 1; i <= maxPageNumber; i++) {
    const url = `${baseUrl}${i}`
    try {
      const cocktailList = await getSakelog.getCocktailList(url)
      await cocktailList.forEach( async (url, i) => {
        console.log(`GET ${i}: ${url}`)
        const cocktailExample = await getSakelog.getCocktailDetail(baseSpirits, url)
        console.log(`POST ${i}: ${url}`)
        await upload(cocktailExample, 'cocktails')
      })
    } catch (e) {
      console.error(e)
    }
  }
}

scrapingSakelog('http://www.sakelog.com/cocktails/search/%E3%81%9D%E3%81%AE%E4%BB%96/', 4, 'その他')
