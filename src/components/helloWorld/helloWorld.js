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
        template: "<h3>Hello World!</h3>"
    },
    enabled: true,
    appendTo: 'prm-top-bar-before',
    enableInView: '.*'
}