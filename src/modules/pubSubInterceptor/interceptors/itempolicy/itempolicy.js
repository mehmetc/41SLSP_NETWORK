//http://localhost:8003/primaws/rest/priv/ILSServices/holdings/9336266850005505?record-institution=41SLSP_RZS&lang=de&lang=de

pubSub.subscribe('after-ILSServicesBaseURL', (reqRes) => {
    reqRes.data.data.itemInfo.locations.forEach(location => {        
        location.items.forEach(item => {item.itempolicy = item.itempolicy.replace(/^\d* /,'')});        
    });
    return reqRes;    
})