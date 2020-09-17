class HelloWorldController {
    constructor() {
        console.log('constructor');
    }
}

export let component = {
    name: 'hello-world',
    config: {
        bindings: {parentCtrl: '<'},
        controller: HelloWorldController,
        template: "<h1>Hello World</h1>"
    },
    enabled: true,
    appendTo: 'prm-top-bar-before',
    enableInView: '.*'
}