import { errorLog } from "swen-logger";
import API from "swen-types/api";
import { validateAPI } from "swen-validator";
/**
 * 
 * @param {Object||String} elementReference - reference to the element 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns boolean, wether the element exists inside the component dictionary
 */
export function elementExists(elementReference: { name: string } | string, api: API) {
    if(!validateAPI(api)) return;

    if(typeof elementReference === 'object'){
        if (api.componentDictionary[elementReference.name] == null || api.componentDictionary[elementReference.name] == undefined) {
            errorLog(`Element with index '${elementReference.name}' does not exist`); 
            return false;
        } 
        return api.componentDictionary[elementReference.name] != null;
    } else if (typeof elementReference === 'string'){
        let name = elementReference;
        if (api.componentDictionary[name] == null || api.componentDictionary[name] == undefined) {
            errorLog(`Element with index '${name}' does not exist`); 
            return false;
        }
        return api.componentDictionary[name] != null;
    }
};