import { Checker } from './lib/_check.js'
import { HasMeta } from './lib/_db.js'
import { GetHtml } from './lib/_get.js'
import { ParseDOM } from './lib/_parse.js'
import { extractMetaTags } from './lib/_extract.js'
import { tooltipInit } from '@hyperlinks-js/tooltip'

export const Init = async (tipOption) => {
  if (Checker('localStorage')) {
    console.log('localStorage is supported')
  } else {
    throw new Error('localStorage is not supported')
  }
  const NATIVE = [...document.getElementsByClassName('hyperlinks')].map((x) => x.href)
  if (!NATIVE.length) {
    console.warn('Running with No Hyperlinks. \n\n If you think this is wrong please refer the docs properly : https://github.com/Criticalcarpet/Hyperlinks#readme')
    return false
  }
  const FEEDER = [...new Set(NATIVE)]
  console.log(FEEDER)
  const NEW = HasMeta(FEEDER)
  console.log(NEW)
  if (NEW.length > 0) {
    const DATA = await GetHtml(FEEDER)
    console.log(DATA)
    for (let i = 0; i < DATA.length; i++) {
      const DOM = ParseDOM(DATA[i].contents)
      console.log(DOM)
      const NEEDEDMETA = ['og:image', 'og:url', 'og:title', 'og:description']
      extractMetaTags(DOM, NEEDEDMETA, DATA[i].status.url)
    }
  }
  tooltipInit(tipOption)
}
