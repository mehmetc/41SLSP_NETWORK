import requestMessageHTML from './requestMessage.html'

class RequestMessageController {
    constructor($element) {
        this.$element = $element[0];
        this.form = this.$element.parentElement.parentElement;
        let feesLinkText = this.parentCtrl.$translate.instant('customized.fulldisplay.fees'); //default SLSP
        //params with default values:
        let params = { "feesUrl": "https:\/\/slsp.ch\/fees", "feesLinkText": feesLinkText, "feesInfo": "" };
        //load params form labels table:
        for (let param in params) {
            let translation = this.parentCtrl.$translate.instant('customize.fullview.' + param);
            //label present
            if (translation != param) {
                this[param] = translation;
            }
            //label not present -> set default
            else {
                this[param] = params[param];
            }
        }
    }
    //function for cloning info block into form
    $doCheck = function () {
        let form = false;
        if (this.form.children[1].children[1] !== undefined) {
            if (this.form.children[1].children[1].children[0] !== undefined) {
                form = this.form.children[1].children[1].children[0];
            }
        }
        else if (this.form.children[1].children[0] != undefined) {
            form = this.form.children[1].children[0].children[0];
        }
        if (form) {
            if (form.children.length == 2) {
                //remove bracket info (="see below") from request button:
                form.children[1].lastChild.firstChild.lastChild.innerHTML = form.children[1].lastChild.firstChild.lastChild.innerHTML.replace(/.\(.*\)/gi, '');
                //clone an insert info-block:
                let elem = this.$element.children[0].cloneNode(true)
                form.insertBefore(elem, form.children[1]);
            }
        }
    }
}

RequestMessageController.$inject = ['$element'];

export let requestMessagecomponent = {
    name: 'rzs-request-message',
    enabled: true,
    appendTo: 'prm-request-after',
    enableInView: '.*',
    config: {
        bindings: { parentCtrl: '<' },
        controller: RequestMessageController,
        template: requestMessageHTML
    }
}
