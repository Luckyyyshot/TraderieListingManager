const createTemplate = {
    method: "POST",
    credentials: "include",
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd191c2VybmFtZV9jaGFuZ2UiOmZhbHNlLCJhbmRyb2lkX29yZGVyX2lkIjpudWxsLCJhbmRyb2lkX3B1cmNoYXNlX3Rva2VuIjpudWxsLCJhbmRyb2lkX3N1YnNjcmlwdGlvbl9zdGF0dXMiOm51bGwsImFwcGxlX2lkIjpudWxsLCJiYW5fcmVhc29uIjpudWxsLCJiYW5uZWRfYXQiOm51bGwsImJhbm5lZF9nYW1lIjpudWxsLCJiYW5uZWQiOmZhbHNlLCJiaW8iOm51bGwsImJuZXRfaWQiOm51bGwsImJuZXQiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDI1LTAzLTE1VDE1OjM1OjAwLjg2OFoiLCJjdXN0b21pemF0aW9uIjpudWxsLCJkaXNjb3JkX2lkIjoiMTc4OTYxNjg0MDU0OTMzNTA0IiwiZGlzY29yZF9ub3RpZnMiOmZhbHNlLCJkaXNjb3JkIjoibHVja3l5eXNob3QiLCJlbWFpbF9ib3VuY2UiOmZhbHNlLCJlbWFpbF9tYXJrZXRpbmciOm51bGwsImVtYWlsIjoibmlrb2xhai5zY2htaWR0QGhvdG1haWwuY29tIiwiZnJpZW5kX2NvZGUiOm51bGwsImdvb2dsZV9pZCI6bnVsbCwiaGlkZV9jb250YWN0cyI6bnVsbCwiaWQiOiIyOTQyNzg2NTM2IiwiaW5mb18xIjpudWxsLCJpbmZvXzIiOm51bGwsImluZm9fMyI6bnVsbCwiaW5zdGFncmFtIjpudWxsLCJpc2xhbmRfbmFtZSI6bnVsbCwibGFuZ3VhZ2VzIjpudWxsLCJsYXN0X3Nlc3Npb25fcmVzZXRfZGF0ZSI6bnVsbCwibW9ub3BvbHkiOm51bGwsIm5vdGVzIjpudWxsLCJub3RpZmljYXRpb25fc2V0dGluZ3MiOm51bGwsIm90aGVyIjpudWxsLCJwaG9uZSI6bnVsbCwicHJvZmlsZV9pbWciOm51bGwsInJlZmVycmVkX2lkIjpudWxsLCJyZXF1ZXN0X2RtIjp0cnVlLCJyb2Jsb3hfaWQiOm51bGwsInJvYmxveF91c2VybmFtZSI6bnVsbCwic2lnbnVwX21ldGhvZCI6ImRpc2NvcmQiLCJzdGF0dXMiOiJvbmxpbmUiLCJzdHJpcGVfY2FuY2VsX2F0IjpudWxsLCJzdHJpcGVfY3VzdG9tZXJfaWQiOm51bGwsInN0cmlwZV9zdWJzY3JpcHRpb25fZW5kIjpudWxsLCJzdHJpcGVfc3Vic2NyaXB0aW9uX3N0YXR1cyI6bnVsbCwidGNnX2lkIjpudWxsLCJ0aWt0b2siOm51bGwsInRpbWV6b25lIjpudWxsLCJ0dXJuaXBfZXhjaGFuZ2UiOm51bGwsInR3aXRjaCI6bnVsbCwidHdpdHRlcl9pZCI6bnVsbCwidHdpdHRlciI6bnVsbCwidXBkYXRlZF9hdCI6IjIwMjUtMDMtMTVUMTU6MzU6MDAuODY4WiIsInVzZXJuYW1lIjoibHVja3l5eXNob3QiLCJ2aWxsYWdlcl9uYW1lIjpudWxsLCJ3aGljaF9tb2RfYmFubmVkIjpudWxsLCJ5b3V0dWJlIjpudWxsLCJyb2xlcyI6bnVsbCwib3RwX2FkZGVkIjpmYWxzZSwiYWN0aXZhdGVkIjp0cnVlLCJsYXN0X2xvZ2dlZF9pbiI6IjIwMjUtMDMtMTVUMTU6MzU6MDEuMjU0WiIsImlhdCI6MTc0MjA1MjkwMSwiaXNzIjoiYWtyZXcifQ.qbaOQ7PUOa8niMBX5mE1XhvbPB84OlysDqKsWXX2AU0",
        "Content-Type": "multipart/form-data; boundary=----geckoformboundary4effdb675d3ba3363203b1fcf3946f8"
    }
};

const bodyCreateTemplate = "------geckoformboundary4effdb675d3ba3363203b1fcf3946f8\r\nContent-Disposition: form-data; name=\"body\"\r\n\r\n{\"acceptListingPrice\":false,\"captcha\":\"\",\"currencyGroupPrices\":[],\"endTime\":\"\",\"free\":false,\"item\":\"id???\",\"itemMode\":null,\"itemType\":\"type???\",\"makeOffer\":false,\"needMaterials\":false,\"offerBells\":false,\"offerNmt\":false,\"offerWishlist\":false,\"offerWishlistId\":\"\",\"selling\":true,\"standingListing\":false,\"stockListing\":stock???,\"touchTrading\":false,\"wishlist\":\"\",\"amount\":amount???,\"items\":[price???],\"properties\":[{\"id\":798,\"property\":\"Platform\",\"option\":\"PC\",\"type\":\"string\",\"preferred\":true},{\"id\":799,\"property\":\"Mode\",\"option\":\"softcore\",\"type\":\"string\",\"preferred\":true},{\"id\":800,\"property\":\"Ladder\",\"option\":true,\"type\":\"bool\",\"preferred\":true},{\"id\":933,\"property\":\"Region\",\"option\":\"Europe\",\"type\":\"string\",\"preferred\":true}]}\r\n------geckoformboundary4effdb675d3ba3363203b1fcf3946f8--\r\n";
const bodyCreatePriceTemplate = "{\"quantity\":\"amount???\",\"diy\":false,\"canCatalog\":false,\"variant\":null,\"value\":\"id???\",\"label\":\"label???\",\"variants\":null,\"img_url\":\"url???\",\"index\":0,\"group\":group???,\"offerProps\":[]}";
const EItems = {
    perfect_amethyst: {
        id: 3828750419
    },
    mal_rune: {
        id: 2401638276
    },
    ist_rune: {
        id: 2290642411
    },
    vex_rune: {
        id: 3806138905
    },
    ohm_rune: {
        id: 3896329590
    },
    lo_rune: {
        id: 3632079454
    },
    ber_rune: {
        id: 4149485449
    },
    jah_rune: {
        id: 2552039455
    }
}

const deleteTemplate = {
    method: "POST",
    credentials: "include",
    headers: {
        "Accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd191c2VybmFtZV9jaGFuZ2UiOmZhbHNlLCJhbmRyb2lkX29yZGVyX2lkIjpudWxsLCJhbmRyb2lkX3B1cmNoYXNlX3Rva2VuIjpudWxsLCJhbmRyb2lkX3N1YnNjcmlwdGlvbl9zdGF0dXMiOm51bGwsImFwcGxlX2lkIjpudWxsLCJiYW5fcmVhc29uIjpudWxsLCJiYW5uZWRfYXQiOm51bGwsImJhbm5lZF9nYW1lIjpudWxsLCJiYW5uZWQiOmZhbHNlLCJiaW8iOm51bGwsImJuZXRfaWQiOm51bGwsImJuZXQiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDI1LTAzLTE1VDE1OjM1OjAwLjg2OFoiLCJjdXN0b21pemF0aW9uIjpudWxsLCJkaXNjb3JkX2lkIjoiMTc4OTYxNjg0MDU0OTMzNTA0IiwiZGlzY29yZF9ub3RpZnMiOmZhbHNlLCJkaXNjb3JkIjoibHVja3l5eXNob3QiLCJlbWFpbF9ib3VuY2UiOmZhbHNlLCJlbWFpbF9tYXJrZXRpbmciOm51bGwsImVtYWlsIjoibmlrb2xhai5zY2htaWR0QGhvdG1haWwuY29tIiwiZnJpZW5kX2NvZGUiOm51bGwsImdvb2dsZV9pZCI6bnVsbCwiaGlkZV9jb250YWN0cyI6bnVsbCwiaWQiOiIyOTQyNzg2NTM2IiwiaW5mb18xIjpudWxsLCJpbmZvXzIiOm51bGwsImluZm9fMyI6bnVsbCwiaW5zdGFncmFtIjpudWxsLCJpc2xhbmRfbmFtZSI6bnVsbCwibGFuZ3VhZ2VzIjpudWxsLCJsYXN0X3Nlc3Npb25fcmVzZXRfZGF0ZSI6bnVsbCwibW9ub3BvbHkiOm51bGwsIm5vdGVzIjpudWxsLCJub3RpZmljYXRpb25fc2V0dGluZ3MiOm51bGwsIm90aGVyIjpudWxsLCJwaG9uZSI6bnVsbCwicHJvZmlsZV9pbWciOm51bGwsInJlZmVycmVkX2lkIjpudWxsLCJyZXF1ZXN0X2RtIjp0cnVlLCJyb2Jsb3hfaWQiOm51bGwsInJvYmxveF91c2VybmFtZSI6bnVsbCwic2lnbnVwX21ldGhvZCI6ImRpc2NvcmQiLCJzdGF0dXMiOiJvbmxpbmUiLCJzdHJpcGVfY2FuY2VsX2F0IjpudWxsLCJzdHJpcGVfY3VzdG9tZXJfaWQiOm51bGwsInN0cmlwZV9zdWJzY3JpcHRpb25fZW5kIjpudWxsLCJzdHJpcGVfc3Vic2NyaXB0aW9uX3N0YXR1cyI6bnVsbCwidGNnX2lkIjpudWxsLCJ0aWt0b2siOm51bGwsInRpbWV6b25lIjpudWxsLCJ0dXJuaXBfZXhjaGFuZ2UiOm51bGwsInR3aXRjaCI6bnVsbCwidHdpdHRlcl9pZCI6bnVsbCwidHdpdHRlciI6bnVsbCwidXBkYXRlZF9hdCI6IjIwMjUtMDMtMTVUMTU6MzU6MDAuODY4WiIsInVzZXJuYW1lIjoibHVja3l5eXNob3QiLCJ2aWxsYWdlcl9uYW1lIjpudWxsLCJ3aGljaF9tb2RfYmFubmVkIjpudWxsLCJ5b3V0dWJlIjpudWxsLCJyb2xlcyI6bnVsbCwib3RwX2FkZGVkIjpmYWxzZSwiYWN0aXZhdGVkIjp0cnVlLCJsYXN0X2xvZ2dlZF9pbiI6IjIwMjUtMDMtMTVUMTU6MzU6MDEuMjU0WiIsImlhdCI6MTc0MjA1MjkwMSwiaXNzIjoiYWtyZXcifQ.qbaOQ7PUOa8niMBX5mE1XhvbPB84OlysDqKsWXX2AU0",
        "Content-Type": "application/json",
    },
    body: "{\"listing\":\"???\",\"selling\":true,\"remove\":true}",
}

export { createTemplate, bodyCreateTemplate, bodyCreatePriceTemplate, EItems, deleteTemplate };