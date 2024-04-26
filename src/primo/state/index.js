let instance;
let globalState = {};

class State {
    constructor() {
        if (instance) {
            throw new Error("State is a singleton")
        }
        
        instance = this;
    }

    get(state) {
        if (Object.keys(globalState).includes(state)) {
            return globalState[state]                
        } else {
            return null;
        }
    }

    set(state, value) {
        globalState[state] = value;
    }
}
let stateInstance = Object.freeze(new State());

export default stateInstance;