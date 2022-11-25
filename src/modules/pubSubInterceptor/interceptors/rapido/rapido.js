pubSub.subscribe("after-bestOfferURL", (reqRes) => {
    console.log("after-bestOfferURL", reqRes);
    return reqRes;
});


pubSub.subscribe("after-digitalBestOfferURL", (reqRes) => {
    console.log("after-digitalBestOfferURL", reqRes);
    return reqRes;
});

//"after-ngrsResourceSharingServiceEnabledURL"
pubSub.subscribe("after-fulldisplay", (reqRes) => {
    console.log("after-fulldisplay", reqRes);
    //reqRes.data.ngrsEnabled = false;    
    debugger;
    console.log('---------------',reqRes.data.tiles.ResultTileInterface['41SLSP_RZS:rapdio_view.ResultTileInterface.41SLSP_RZS_MyInst_and_CI'].tabsorder.items);
    //window.appConfig.tiles.ResultTileInterface['41SLSP_RZS:rapdio_view.ResultTileInterface.41SLSP_RZS_MyInst_and_CI'].tabsorder.items=window.appConfig.tiles.ResultTileInterface['41SLSP_RZS:rapdio_view.ResultTileInterface.41SLSP_RZS_MyInst_and_CI'].tabsorder.items.replace(',rapidoOffer','')
    return reqRes;
});

// pubSub.subscribe("after-ngrsNoOfferMessageURL", (reqRes) => {
//     console.log("after-ngrsNoOfferMessageURL", reqRes);
// });

// pubSub.subscribe("after-ngrsPickupInformationUrl", (reqRes) => {
//     console.log("after-ngrsPickupInformationUrl", reqRes);
// });

// pubSub.subscribe("after-rapidoFormsCustomizationURL", (reqRes) => {
//     console.log("after-rapidoFormsCustomizationURL", reqRes);
// });

// pubSub.subscribe("after-pnxBaseURL", (reqRes) => {
//     console.log("after-pnxBaseURL", reqRes);
// });

// pubSub.subscribe("after-esploroPortalSearchServices", (reqRes) => {
//     console.log("after-esploroPortalSearchServices", reqRes);
// });
