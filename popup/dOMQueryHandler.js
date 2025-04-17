async function getValueFromDOM(code){
    const currentTab = (await browser.tabs.query({ currentWindow: true, active: true }))[0];
    
    return (await browser.tabs.executeScript(currentTab.id, {
        code: code
    }));
}

async function getListingPrices() {
    const currentTab = (await browser.tabs.query({ currentWindow: true, active: true }))[0];
    
    const response = await browser.tabs.executeScript(currentTab.id, {
        code: `
          [...document.querySelectorAll(".listing-page-price .price-line")].map(line => {
            const children = [...line.children].map(child => child.innerText.trim());
            return children;
          });
        `
      });

    let result = [];
    let finalResult = [];
    for (const item of response[0]) {
        result.push(item[0]);
        if (item[1]){
            finalResult.push(result);
            result = [];
        }
    }
    finalResult.push(result);
    return finalResult;
}

function getListingIdFromUrl(url) {
    const regex = RegExp(/\/\d+\?/);
    return regex.exec(url)[0].replace("/", "").replace("?", "");
}

function getListingItemFromTitle(title) {
    return title.split(" | ")[0].toLowerCase().replace(" listing", "").replace(" ", "_");
}

export { getValueFromDOM, getListingPrices, getListingIdFromUrl, getListingItemFromTitle };