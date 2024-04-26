import PrimoSession from './session';
import PrimoComponents from './components';
import PrimoRecord from './record';
import PrimoFacet from './facet';
import PrimoCommon from './common';
import PrimoState from './state';

window.Primo = {
    session: PrimoSession, 
    components: PrimoComponents,
    record: PrimoRecord,
    facet: PrimoFacet,    
    common: PrimoCommon,
    state: PrimoState,
    version:  (() => {
        let version = "0.0.3";
        return `Library:${version} - ALMA:${window.appConfig['system-configuration'].Alma_Version}`;
    })()

};