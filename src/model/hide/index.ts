/**
 * 
 * @param {boolean} condition 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */

import API from "swen-types/api";
import { validateAPI } from "swen-validator";
// TODO: look into having a Sketchfab API type
export function hide(condition: any, api: API) {
    if(!validateAPI(api)) return;

    for (let key in api.componentDictionary) {
        condition(key) ? api.hide(api.componentDictionary[key].instanceID) : '';
    }
};
