import { developmentLog } from "swen-logger";
import API from "swen-types/api";
import Dictionary from "swen-types/dictionary";
import ModelElement from "swen-types/element";
import validateAPI from "swen-validator/dist/api";

/**
 * Builds a dictioanry of all blend components so that then can be referenced later
 * @param {3D element array} graph 
 * @param {Sketchfab API object} api - JSON object holding all application data  
 * @returns promise resolve
 */
export async function buildComponentDictionary(graph: any, api: API) {
    return new Promise((resolve) => {
        if(!validateAPI(api)) return;

        developmentLog('Started building model element dicitironary.');
        let dictioanry: Dictionary<ModelElement> = {};

        let elements = graph.children[0].children;
        elements.forEach((e: ModelElement) => {
            if(!e.name) return;
            let n = e.name.split('_')[0];
            dictioanry[n] = e;
        });

        developmentLog('Storing model element dictionary into the API object');
        api.componentDictionary = dictioanry;
        return resolve(true);
    })
};