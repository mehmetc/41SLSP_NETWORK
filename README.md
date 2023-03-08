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
