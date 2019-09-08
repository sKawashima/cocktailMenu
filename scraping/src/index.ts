import * as getSakelog from './getSakelog'

const test = async () => {
  const url = 'http://www.sakelog.com/cocktails/search/%E3%82%B8%E3%83%B3/1'
  try {
    const cocktailList = await getSakelog.getCocktailList(url)
    const cocktailExample = await getSakelog.getCocktailDetail('ジン', cocktailList[0])
    console.dir(cocktailExample)
  } catch (e) {
    console.error(e)
  }
}

test()
