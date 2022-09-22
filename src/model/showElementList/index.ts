import { API } from "swen-types/api";
import { elementExists } from "../elementExists";
import { showElement } from "../showElement";

/**
 * 
 * @param {array} elementList - element list array
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
// TODO: Element list type
// TODO: move this functionality into showElement
export function showElementList(elementList: any, api: API) {
//    if(!validateAPI(api)) return;

    elementList = elementList.filter((e: any) => e != '');

    elementList.forEach((key: any) => {
        elementExists(key, api) ? showElement(key, api) : '';
    });
};