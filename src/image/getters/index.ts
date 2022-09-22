import { API } from "swen-types/api";

/**
 * 
 * @param {SWEN API object} api - JSON object holding all application data  
 * @param {string} imageKey - string reference to the image inside the dictioanry 
 * @returns image date form stored in the image dictionary
 */
// TODO: rename function to something like _getImage
export function getImageFromImageDictionary(imageKey: string, api: API) {
    return api.imageDictionary[imageKey] ? api.imageDictionary[imageKey] : new Error('API has no image dictionary!');
}
