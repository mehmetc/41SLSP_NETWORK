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
- Build the source
```
yarn build
yarn watch
```
- Create a package
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
├── primo                                       Bridge into Angular eco system
└── templates                                   Template files used to overwrite existing primo templates
```
