import Config from "react-native-config";

//Colors  
var colors = {
    appColor: "#37A0DA",
    tabbarActiveColor: "#2D71B6",
    black: "#000000",
    white: "#FFFFFF",
    Saving: "#E6A620",
    Secure: "#30A2F3",
    Vault: "#679F37",
    Joint: "#660000",
    placeholder: "#5F5F5F"
};

const assetsImages = "../../assets/images/";
var images = {
    launchScreen: {
        appiocn: require( assetsImages + "launchscreen/Appiocn.png" ),
    }
}

//Rest Full Api
const domain = Config.API_DOMIN_DEV;
var apiary = {
    domain: domain,
    getCategory: domain + Config.API_GETCATEGORY,
    getCategoryrandom: domain + Config.API_GETCATEGORYRANDOM,
}

var asyncStorageKeys = {
    rootViewController: "rootViewController"
}

export {
    colors,
    images,
    apiary,
    asyncStorageKeys
};
