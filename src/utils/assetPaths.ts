export const BASE_URL = "https://s3.regru.cloud/cksutd/buro";
export const VIDEO_PATH = BASE_URL + "/videos/";
export const IMAGE_PATH = BASE_URL + "/images/";

export const VideoUrl = (filename: string): string => `${BASE_URL}${VIDEO_PATH}${filename}`;
export const ImageUrl = (filename: string): string => `${BASE_URL}${IMAGE_PATH}${filename}`;


