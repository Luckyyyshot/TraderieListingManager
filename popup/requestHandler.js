import { createTemplate, bodyCreateTemplate, bodyCreatePriceTemplate, EItems, deleteTemplate } from './hardCodedConstants.js';

async function executeCreate(sellingItem, amount, stockListing, buyingItems, amounts) {
    try {
        let price = "";
        for (let i = 0; i < buyingItems.length; i++) {
            if (i > 0) { price = price + "," + getPrice([buyingItems[i]], [amounts[i]], i); }
            else {price = getPrice(buyingItems[i], amounts[i], i)}
        }

        let body = bodyCreateTemplate;
        body = body.replace("id???", EItems[sellingItem].id);
        body = body.replace("stock???", stockListing);
        body = body.replace("amount???", amount);
        body = body.replace("price???", price);

        const request = {
            ...createTemplate,
            body: body
        };
        
        const response = await window.fetch("https://traderie.com/api/diablo2resurrected/listings/create", {
            credentials: request.credentials,
            headers: request.headers,
            body: request.body,
            method: request.method
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { success: true, data };
    }
    catch (error) {
        console.error('Error executing request:', error);
        return { success: false, error: error.message };
    }
}

async function executeDelete(listing) {
    try {
        const request = {
            ...deleteTemplate,
            body: deleteTemplate.body.replace("???", listing)
        };
        await window.fetch("https://traderie.com/api/diablo2resurrected/sell", {
            credentials: request.credentials,
            headers: request.headers,
            body: request.body,
            method: request.method
        });
    }
    catch (error) {
        console.error('Error executing request:', error);
        return { success: false, error: error.message };
    }
}

function getPrice(items, amount, group) {
    let price = "";
    for (let i = 0; i < items.length; i++) {
        if (i > 0) { price = price + ","; }
        price = price + bodyCreatePriceTemplate;
        price = price.replace("group???", group);
        price = price.replace("id???", EItems[items[i]].id);
        price = price.replace("amount???", amount[i]);
    }
    return price;
}

export { executeCreate, executeDelete }; 