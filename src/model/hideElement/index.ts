import API from "swen-types/api";
import validateAPI from "swen-validator/dist/api";
import { elementExists } from "../elementExists";
import { getElementID } from "../getters";

/**
 * 
 * @param {Object||String} elementReference - reference to the element
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns true
 */
// TODO: Element reference type
export function hideElement(elementReference: { name: string } | string, api: API) {
    if(!validateAPI(api)) return;

    elementExists(elementReference, api) ? api.hide(getElementID(elementReference, api)) : console.error(`Element with name ${elementReference} does not exist`);
    return true;
};