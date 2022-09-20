import { errorLog } from "swen-logger";
import API from "swen-types/api";
import validateAPI from "swen-validator/dist/api";
import { validateComponentDicitonary } from "../validation";

/**
 * 
 * @param {string} key -  key for search  
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns one element that satisfies the key given 
 */
// TODO: look into having a Sketchfab API type
export function find(key: string, api: API) {
    if(!validateAPI(api)) return;
    if(!validateComponentDicitonary(api)) return;
    
    for (let elementId in api.componentDictionary) {
        if(elementId.includes(key)) return api.componentDictionary[elementId];
    }
    
    errorLog(`Element with key: '${key}' does not exsist`);
    return -1;
};