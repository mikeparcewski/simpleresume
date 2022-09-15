import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import deepmerge from "deepmerge";
import { IconDetail, Profile, SimpleResume } from "../Objects/SimpleResume";
import { SimpleType } from "../Objects/SimpleType";


export let DEF_ICONDETAIL : IconDetail = {
    "name": "link-slash",
    "clz": "fas"
};

type CONFIG_TYPE = {
    element?: string;
    file: typeof require;
}

const CONFIGS : CONFIG_TYPE[]  = [
    { element: "icons", file: require("../Customize/configs/Icons.json") },
    { element: "resume", file: require("../Customize/configs/SiteNav.json") },
    { file: require("../Customize/configs/ResumeOverrides.json") },
    { element: "resume", file: require("../Customize/MyResume.json") }
];

function SiteConfig() : SimpleResume {

    let siteData : SimpleResume = {};

    // load the individual configs
    CONFIGS.forEach((config : CONFIG_TYPE) => {
        let body = {} as SimpleType;
        if (config.element) body[config.element] = parseJSON(config.file);
        else body = parseJSON(config.file);
        siteData = deepmerge.all([ siteData, body ]);
    });

    // set the default (err) icon
    if (siteData.icons) DEF_ICONDETAIL = siteData.icons.unknown;

    // lookup function for page title
    siteData.getProfilePageTitle = (network: string) : string => {
        return (siteData.resume?.basics.profiles
            .reduce( (a, b) => a.network === network ? a : b)
            .title as string);
    }

    // lookup function for custom icons
    siteData.getIconName = ( name : string ) : IconName => {
        try {
            return getIconDetail(name, siteData).name as IconName;
        }
        catch(err) {
            console.log(name, err);
        }
        return DEF_ICONDETAIL.name as IconName;
    }

    // lookup function for custom icons
    siteData.getIconPrefix = ( name : string ) : IconPrefix => {
        try {
            return getIconDetail(name, siteData).clz as IconPrefix;
        }
        catch(err) {
            console.log(name, err);
        }
        return DEF_ICONDETAIL.clz as IconPrefix;
    }    

    return siteData;
}

/**
 * 
 * @param resume 
 * @param profile 
 * @returns 
 */
 export function isBrand(resume : SimpleResume, profile : Profile) : boolean {
    return (resume && resume.getIconPrefix && resume.getIconPrefix(profile.network) === "fab") as boolean;
}

export default SiteConfig;

/**
 * get matching icon for name (or default icon) 
 * @param name the alternative name of the icon to look up
 * @param siteData the site configuration object
 * @returns icondetail matching name or default
 */
function getIconDetail(name : string, siteData : SimpleResume) : IconDetail {
    try { 
        return siteData.icons ? siteData.icons[name] : DEF_ICONDETAIL;
    }
    catch(err) {
        console.log(name, err);
    }
    return DEF_ICONDETAIL;
}

/**
 * handles the parsing of the file
 * @param req 
 * @returns 
 */
function parseJSON(req : typeof require) : any {
    try {
        return JSON.parse(JSON.stringify(req))!;
    }
    catch(err) {
        console.log(err, req);
    }
    return {};
}