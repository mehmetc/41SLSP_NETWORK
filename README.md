# 41SLSP_NETWORK
This is the CENTRAL_PACKAGE for RZS

## Getting started:
### Setting up the environment
- Clone the repository
- Install dependencies
```
yarn install
```
- Start up a proxy for testing
```
yarn start
```
- Build the source. 
  !!!!Open the deleveloper console and disable cache "Network -> Disable cache"
```
yarn build
yarn watch
```
- Create a package that you can upload to the back office 
```
yarn package
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
├── index.js                                    CentralCustom definition
├── loader.js                                   Component loader
├── primo                                       Bridge into Primo services like user, records, facets ...
└── templates                                   Template files used to overwrite existing primo templates
```
## Changing the server address

In ```package.json``` you can find the proxy and vid parameter. If you update them then next time you run ```yarn start``` it will open the newly assigned Primo. the ```---ve``` parameter is only needed if you have PrimoVE aka Alma Discovery.

```
{
    "script": "start": "primoServe --vid=41SLSP_RZS:VU05 --proxy=https://slsp-rzs.primo.exlibrisgroup.com --dir=./dist --ve"
}
```