
//webkit
// import{webkit, test} from"@playwright/test"
// test("to launch webkit browser",async()=>{

//     let browser =await webkit.launch()
//     let context =await browser.newContext()
//     let page = await context.newPage()

//     await page.goto(`https://www.flipkart.com/`)
//     let url=page.url()
//     console.log(url);
//     await page.waitForLoadState('domcontentloaded')
//     let title=await page.title()
//     console.log(title);
    
// })

import {chromium, test} from "@playwright/test"
test("to launch edge browser", async()=>{
    let browser=await chromium.launch({channel: 'msedge'})
    let context=await browser.newContext()
    let page= await context.newPage()
    await page.goto (`https://www.redbus.in/`)
    let url= page.url();
    console.log(url);
    await page.waitForLoadState("domcontentloaded")
    let title=await page.title()
    console.log(title);
    
    
})

