const { test } = require('@playwright/test');

test("webtable pagination example", async ({ page }) => {
    await page.goto("https://assertqa.com/practice/webtables");

    //identify the table lement
    let WTable = page.locator('table.w-full');
    //identify the table header
    let WTHeader = WTable.locator('thead');
    //identify the table body and row elements
    let WTableBodyRows = WTable.locator('tbody tr');
    //identify table columns header elements
    let WTableColumns = WTHeader.locator('tr th');

    //count of the rows and columns count
    let rowCount=await WTableBodyRows.count()
    let colCount=await WTableColumns.count();
    console.log("Rows Count: " + rowCount);
    console.log("Columns Count: " + colCount);

    //print all the columns in the header
    let HeaderText = await WTableColumns.allTextContents();
    //console.log(HeaderText);
    console.log(HeaderText.map(text => text.trim()).join('\t'))

    let totalRowsCount = 0;
    let hasNextPage = true;
    //identify the NextPage Elements 
    const nextButton = await page.locator("button[data-cy='pagination-next']");
    let bodyRowText = '';
    while (hasNextPage) {
        // Wait for the table rows to be visible on the current page
        await WTableBodyRows.first().waitFor({ state: 'visible' });
        //count the number rows in the current page
        const currentPageRows = await WTableBodyRows.count();
        //add the no of current rows to total rows count
        totalRowsCount = totalRowsCount + currentPageRows;
        //print all the body rows line by line
        for (let row = 0; row < currentPageRows; row++) {
            bodyRowText = bodyRowText + await WTableBodyRows.nth(row).innerText() + "\n";
        }
        //check if the Next button exist and clickable
        if (await nextButton.isVisible() && await nextButton.isEnabled()) {
            // Click the next button to navigate to the next page
            await nextButton.click();
        } else {
            // Exit the loop if there is no next page
            hasNextPage = false;
        }
    }
    console.log(bodyRowText);
    console.log("Total Number of rows:" + totalRowsCount);
})