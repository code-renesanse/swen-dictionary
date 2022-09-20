import API from "swen-types/api";
import validateAPI from "swen-validator/dist/api";

/**
 * 
 * @param {String | Object} elementRef - element key | object 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns id of the 3D element
 */
// TODO: Element reference type
export function getElementID(elementRef: {name: string} | string, api: API): string {
    if(!validateAPI(api)) return '';

    if(typeof elementRef === 'object') {
        return api.componentDictionary[elementRef.name].instanceID;
    } else {
        return api.componentDictionary[elementRef].instanceID;
    }
};