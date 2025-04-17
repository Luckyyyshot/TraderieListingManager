async function loadListings(listings) {
    try {
        const result = await browser.storage.local.get('listings');
        if (result.listings) {
        listings = result.listings;
        console.log('Loaded listings from storage:');
        for (const listing of listings) {
                console.log(listing);
            }
        }
        return listings;
    } catch (error) {
        console.error('Error loading listings from storage:', error);
    }
}

async function savelistings(listings) {
    try {
        await browser.storage.local.set({listings: listings});
        console.log('Saved listings to storage:');
        for (const listing of listings) {
            console.log(listing);
        }
    } catch (error) {
        console.error('Error saving listings to storage:', error);
    }
}

export { loadListings, savelistings };