# 41SLSP_NETWORK
This is the CUSTOM_VIEW package for RZS

## Getting started:
### Setting up the environment
- Clone the repository
- Install dependencies
```
yarn install
```
- Check if ```primoServe``` was installed if not install it manually
```
yarn add primo-serve --dev
```
- Start up a proxy for testing. Copy the URL into a private or incognito window to break the browser cache.
```
yarn start
```
- Build the source. 
```
yarn build
yarn watch
```
- Create a package that you can upload to the back office 
```
yarn package
```
OR
```
make_package.sh
```

- Regarding the ETH person-card. After cloning and yarn install, we need to perform some steps manually in order to get it running (```yarn build ```).

-- Error message in node_modules when using "yarn build"?
```
./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.module.js
./node_modules/primo-explore-eth-person-card/js/eth-person-card.module.js
```
Solution (remove curly brackets in two lines (html) of the two modules):

Remove curly brackets in line 20:
```
./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.module.js
import ethOpenurlInterlibraryHtml from './eth-openurl-interlibrary.html';
```

Remove curly brackets in line 27:
```
./node_modules/primo-explore-eth-person-card/js/eth-person-card.module.js
import ethPersonCardHtml from './eth-person-card.html';
```

Additionally we need to change the controller:
```
.\node_modules\primo-explore-eth-person-card\js\eth-person-card.controller.js
```

Line 77 (replace link to dnb):
```
     //if(l.indexOf('href="http://d-nb.info/gnd/')>-1){
    if(l.indexOf('https://explore.gnd.network/gnd/')>-1){
```
Comment Line 90-92 :
```
90              //      else{
91             //          this.gndIds.push(part);
92             //      }
```
After all these steps ```yarn build``` works fine.

### Directory structure
```
dist                                            Directory with compiled sources
package                                         Directory with the packaged compiled sources
src                                             Source code
├── components                                  Directory with all the components                 
│   └── libInfo                                 Component
│       ├── index.js                            Business logic of component
│       ├── libInfo.html                        Visuals of component
│       └── libInfo.json                        Extra data
├── factories                                   Angular factories and services
│   ├── messageService.html
│   └── messageService.js
├── index.js                                    ViewCustom definition
├── loader.js                                   Component loader
├── primo                                       Bridge into Primo services like user, records, facets ...
└── templates                                   Template files used to overwrite existing primo templates
```
## Changing the server address

In ```package.json``` you can find the proxy parameters. 
```json
  "primo": {
    "url": "https://slsp-rzs.primo.exlibrisgroup.com",
    "institution": "41SLSP_RZS",
    "vidId": "VU15"
  },
```
If you update them then next time you run ```yarn start``` it will point to a new configured Primo. 
