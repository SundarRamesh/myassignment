
import { expect, test } from "@playwright/test"
test(`Book Movie Ticket in PVR Cinemas`, async ({ page }) => {
    await page.goto(`https://www.pvrcinemas.com/`)
    await page.locator(`//div[@aria-label="[object Object]"]`).click()
    await page.locator(`//div[@class="cities-names"]/following::span[text()="Chennai"][1]`).click()
    await page.locator(`//div[@class="quick-book align-self-center"]/following::span[text()="Cinema"]`).click()
    await page.locator(`//div[@id="cinema"]`).click()
    await page.locator(`//div[@class="p-dropdown-items-wrapper"]//li[3]`).click()
    await page.locator(`//div[@class="p-dropdown-items-wrapper"]//span[contains(text(),"Today")]`).click()
    await page.locator(`//li[@class="p-dropdown-item"]/span[text()="BATHTHA"]`).click()
    await page.locator(`//li[@class="p-dropdown-item"]//span[text()="07:35 PM"]`).click()
    await page.locator(`//button[@aria-label="Submit"]/span`).click()
    await page.locator(`//button[text()="Accept"]`).click()
    await page.locator(`//td[@class="seats-col"]/span[@id="CL.CLUB|M:23"]`).click()
    await page.locator(`//td[@class="seats-col"]/span[@id="CL.CLUB|M:24"]`).click()
    await expect(page.locator(`//div[@class="select-seat-number"]//p[text()="M24"]`)).toBeVisible()
    await expect(page.locator(`//div[@class="select-seat-number"]//p[text()="M23"]`)).toBeVisible()
    await expect(page.locator(`//div[@class="seat-bottom-btn"]//h6[text()="436.04"]`)).toBeVisible()
    await page.waitForLoadState("domcontentloaded")
    let title = await page.title()
    console.log(title);
    await page.locator(`//button[text()="Proceed"]`).click()

    await page.waitForTimeout(5000)
})


test.only(`Search product, apply filters, add to cart in Decathlon`,async({page})=>{
    await page.goto(`https://www.decathlon.in/`)
    await page.locator(`//input[@data-test-id="search-input-desktop:container"]`).click()
    await expect(page.locator(`//input[@data-test-id="search-input-desktop:container"]`)).toBeEditable()
    await page.locator(`//input[@data-test-id="search-input-desktop:container"]`).fill("shoes")
    await page.locator(`(//button[@type="button"]/following::span[text()="Shoes"])[1]`).click()
    let title= await page.title()
    console.log(title);
    await page.locator(`//span[@data-test-id="title:Category"]`).click()
    await page.locator(`//label[@data-test-id="checkbox-container"]/following::span[text()="Sport shoes"]`).click()
    await page.locator(`//span[@data-test-id="title:Gender"]`).click()
    await page.locator(`//label[@data-test-id="checkbox-container"]/following::span[text()="Men"]`).click()
    await page.locator(`//span[@data-test-id="title:Size"]`).click()
    await page.locator(`//label[@data-test-id="checkbox-container"]/following::span[text()="Uk 10.5 - eu 45"]`).click()
    await page.locator(`//button[@type="button"]/span[text()="Most relevant"]`).click()
    await page.locator(`//button[@type="button"]/span[text()="Price (low → high) "]`).click()
    await page.locator(`(//div[@data-test-id="product-card:container"])[1]`).click()
    await page.locator(`//button[@aria-label="Select size UK 10.5 - EU 45"]/span[text()="UK 10.5 - EU 45"]`).click()
    await page.locator(`//span[@data-test-id="button-children"]`).click()
    await expect(page.locator(`//h3[text()="Product(s) added to cart"]`)).toBeVisible()
    await page.locator(`//a[@aria-label="Cart"]`).click()
    await expect(page.locator(`//p[text()="₹2,999"]`)).toBeVisible()
    let totalCart= await page.locator(`//p[text()="₹2,999"]`).textContent()
    console.log("Cart value:"+ totalCart);

    await page.waitForTimeout(5000)
})