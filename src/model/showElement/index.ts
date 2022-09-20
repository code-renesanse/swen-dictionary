import API from "swen-types/api";
import { validateAPI } from "swen-validator";
import { getElementID } from "../getters";
import { validateModelElement } from "../validation";

/**
 * 
 * @param {Object||String} elementReference - reference to the element 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns true
 */
// TODO: Element reference type
export function showElement(elementReference: any, api: API) {
    if(!validateAPI(api)) return;
    if(!validateModelElement(elementReference, api)) return;
    
    api.show(getElementID(elementReference, api));
    return true;
};