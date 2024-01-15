import Constants from "expo-constants";

const API_KEY = Constants.expoConfig.extra.apiKey
const BaseURL = "https://api.nasa.gov/planetary/apod"

const data = async(urlParams?:string)=> {
    console.log(API_KEY);
    try {
        const response = await fetch(`${BaseURL}?api_key=${API_KEY}${typeof urlParams !== `undefined` && urlParams?.length > 0? urlParams : ""}`)
        const data = await response.json()
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject("Error:" + error)
    }
}

export default data