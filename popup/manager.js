import { loadListings, savelistings } from './storageHandler.js';
import { getValueFromDOM, getListingPrices, getListingIdFromUrl, getListingItemFromTitle } from './dOMQueryHandler.js';

document.addEventListener('DOMContentLoaded', async () => {
    const subscribeButton = document.querySelector('#subscribe-button');
    const unsubscribeAllButton = document.querySelector('#unsubscribe-all-button');
    
    let listings = await loadListings();

    subscribeButton.addEventListener('click', async () => {
        subscribeButton.disabled = true;
        subscribeButton.textContent = 'Adding...';

        const listingId = getListingIdFromUrl((await browser.tabs.query({ currentWindow: true, active: true }))[0].url);
        const listingItem = getListingItemFromTitle((await browser.tabs.query({ currentWindow: true, active: true }))[0].title);

        let amount = Number(await getValueFromDOM('document.querySelector(".sc-fjvvzt")?.innerText.trim()'));
        if (amount == 0){ amount = Number(await getValueFromDOM('document.querySelector(".listing-header-name>h1")?.innerText.split(" X ")[0]')); }

        let stockListing = (await getValueFromDOM('document.querySelector(".listing-info-icon")?.innerHTML'))[0] != null;
        let prices = await getListingPrices();
        let buyingItems = prices.map(x => x.map(y => y.split(" X ")[1].toLowerCase().replace(" ", "_")));
        let amounts = prices.map(x => x.map(y => Number(y.split(" ")[0])));

        let index = listings.findIndex(x => x.listingId === listingId);
        if (index !== -1){ listings.splice(index, 1) }
        listings.push({listingId: listingId, item: listingItem, amount: amount, stockListing: stockListing, buyingItems: buyingItems, amounts: amounts});
        await savelistings(listings);

        subscribeButton.textContent = 'Added!';
        setTimeout(() => { 
            subscribeButton.disabled = false;
            subscribeButton.textContent = 'Subscribe';
        }, 3000);
    });

    unsubscribeAllButton.addEventListener('click', async () => {
        unsubscribeAllButton.disabled = true;
        unsubscribeAllButton.textContent = 'Unsubscribing...';

        listings = [];
        await savelistings(listings);
        
        unsubscribeAllButton.textContent = 'Unsubscribed!';
        console.log('All listings unsubscribed');
        setTimeout(() => { 
            unsubscribeAllButton.disabled = false;
            unsubscribeAllButton.textContent = 'Unsubscribe All';
        }, 3000);
    });
    
    relistButton.addEventListener('click', async () => {
        await relistSubscribedListings();
    });

