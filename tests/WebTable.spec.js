const { test } = require('@playwright/test')

test("@regression webtable edit update", async ({ page }) => {
    await page.goto("https://demoqa.com/webtables");

    /*
     1.identify the table element
     2.identify the table header
     3.identify the table body and row elements
     4.identify table columns header elements
     5.count of the rows and columns count
    6.Print All the columns in the header single shot using allTextContents or allInnerTexts
    */

   let WT= page.locator('table.table-striped');
   let WTHeader=WT.locator('thead');
    let WTBodyRows=WT.locator('tbody tr')
   let WTHeaderCols=WTHeader.locator('tr th');
   let rowsCount=await WTBodyRows.count();
   console.log(rowsCount);
   let colCount=await WTHeaderCols.count();
   console.log(colCount);
  // console.log((await WTHeaderCols.allInnerTexts()).map(text=>text.trim()).join('\t'));

   let headerColumnText="";
   //Print all the header fields one by one seperately
    for(let col=0; col<colCount; col++)
    {
        headerColumnText = headerColumnText + "\t" + await WTHeaderCols.nth(col).innerText();
    }
    console.log(headerColumnText.trim());

    for(let row=0; row<rowsCount; row++)
    {
        let bodyRowColText="";
        let bodyRow = WTBodyRows.nth(row);
        for(let col=0; col<colCount; col++)
        {
            bodyRowColText = bodyRowColText + "\t" + await bodyRow.locator('td').nth(col).innerText();
        }
        console.log(bodyRowColText.trim());
    }

   
})