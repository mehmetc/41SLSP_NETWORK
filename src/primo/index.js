import PrimoSession from './session';
import PrimoComponents from './components';
import PrimoRecord from './record';
import PrimoFacet from './facet';

window.Primo = {
    session: PrimoSession, 
    components: PrimoComponents,
    record: PrimoRecord,
    facet: PrimoFacet,    
    version:  (() => {
        let version = "0.0.2";
        return `Library:${version} - ALMA:${window.appConfig['system-configuration'].Alma_Version}`;
    })()

};