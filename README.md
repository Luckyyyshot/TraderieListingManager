# Traderie Listing Manager Firefox Plugin

A plugin primarily made to learn how to make firefox plugins, but also to automate certain things I do on the website https://traderie.com.

## Installation

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" on the left sidebar
3. Click "Load Temporary Add-on"
4. Navigate to the extension directory and select the `manifest.json` file

## Features

- Subscribe to a listing that saves data about it so it's able to relist them.
- Unsubscribe all functionality that will drop all the subscribed listings.
- Relist functionality (for some runes in D2R) that relists all the subscribed listings.

## Structure

- `manifest.json` - Extension configuration
- `popup/manager.html` - Popup interface
- `popup/manager.js` - Popup functionality
- `icons/` - Extension icons
