import Dictionary from "swen-types/dictionary";

/**
 * Returns an object holding imported imaga data
 * Format: directory/image
 * @param {String} rootPath - path to the 'assets' directory
 * @param {array} context 
 * @returns JSON object
 */
export function buildImageDictionary(context: any):  Dictionary<string> {
    let imgDictionary: Dictionary<string> = {};

    context.keys().forEach((imagePath: string) => {
        let [ folderRoot, imageName ]= imagePath.split('/');
        let key = imageName.split('.')[0];
        imgDictionary[key] = context(imagePath);
    });

    return imgDictionary;
};