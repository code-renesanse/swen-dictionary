import API from "swen-types/api";
import { validateAPI } from "swen-validator";
/**
 * 
 * @param {string} key -  key for search  
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns all elements that satisfy the key given 
 */
export function findAll(key: string, api: API) {
    if(!validateAPI(api)) return;

    let out = [];
    for (let elementId in api.componentDictionary) {
        elementId.includes(key) ? out.push(api.componentDictionary[elementId]) : '';
    }
    return out;
};