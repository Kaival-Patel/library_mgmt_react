export const APIBASEURL = "http://localhost:3000/api/v1";
export const APIBOOKCOVERURL= "http://localhost:3000/public/book_cover";
export const validateApiResponse = (response) => {
    console.info(response);
    if(response.s!=1){
        return false;
    }
    return true;
}