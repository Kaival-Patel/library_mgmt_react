export const APIBASEURL = "http://localhost:3000/api/v1";

export const validateApiResponse = (response) => {
    if(response.s!=1){
        return false;
    }
    return true;
}