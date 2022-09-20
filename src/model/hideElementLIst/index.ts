import API from "swen-types/api";
import validateAPI from "swen-validator/dist/api";
import { elementExists } from "../elementExists";
import { hideElement } from "../hideElement";

/**
 * 
 * @param {array} elementList - element list array
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
// TODO: Element list type
// TODO: move this functionlaity to hideElement
export function hideElementList(elementList: any, api: API) {
    if(!validateAPI(api)) return;

    elementList = elementList.filter((e: any) => e != '');

    elementList.forEach((key: any) => {
        elementExists(key, api) ? hideElement(key, api) : '';
    });
};