import API from "swen-types/api";
import { validateModelElement } from "swen-validator";
import validateAPI from "swen-validator/dist/api";
import { getElementID } from "../getters";

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