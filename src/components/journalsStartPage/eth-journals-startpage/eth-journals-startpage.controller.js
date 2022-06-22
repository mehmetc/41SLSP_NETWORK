export class ethJournalsStartpageController {
    constructor( ethConfigService, ethJournalsStartpageConfig ) {
        this.ethConfigService = ethConfigService;
        this.config = ethJournalsStartpageConfig;
    }
}
ethJournalsStartpageController.$inject = [ 'ethConfigService', 'ethJournalsStartpageConfig' ];
