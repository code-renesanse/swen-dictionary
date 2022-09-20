import { errorLog } from "swen-logger";
import API from "swen-types/api";
import { validateAPI, validateObject, validateString } from "swen-validator";
import { elementExists } from "../elementExists";

/**
 * 
 * @param {Object||String} elementRef - reference to the element 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns true if the element reference is valid, false otherwise
 */
// TODO: look into having a Sketchfab API type
export function validateModelElement(elementRef: any, api: API) {
    validateAPI(api);
    typeof elementRef === 'string' ? validateString(elementRef) : validateObject(elementRef);
    if(!elementExists(elementRef, api)) {
        errorLog(`Element with name ${elementRef} does not exist`);
        return false;
    }
    return true;
};

// TODO: look into having a Sketchfab API type
export function validateModelId(modelId: string, api: API) {
    validateAPI(api);
    validateString(modelId);
    if(api.modelsList.indexOf(modelId) === -1) {
        errorLog(`${modelId} is not a valid model identificator`);
        return false;
    }
    return true;
};

/**
 * Validates the component dictionary object
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns boolean 
 */
// TODO: look into having a Sketchfab API type
export function validateComponentDicitonary(api: API) {
    validateAPI(api);
    if(api.componentDictionary === null) {
        errorLog('Component dictionary is null');
        return false;
    }
    if(Object.entries(api.componentDictionary).length <= 0) {
        errorLog('Component dictionary is empty');
        return false;
    }
    return true;
};