export type PostImage = {
    date?:String;
    explanation?:String;
    hdurl?:string;
    media_type?:string;
    service_version?:string;
    title?:string;
    url?:string;
}

export type RootStackParams = {
    Home:undefined,
    Details:PostImage
}