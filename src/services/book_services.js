import { toast } from "react-toastify";
import { APIBASEURL } from "../constants";

export const getBooks = async ({token}) => {
    var header = new FormData();
    header.append("token", token);
    const response = await fetch(APIBASEURL+'/books/get',{
        method:"GET",
        headers:header
    });
    return await response.json();
}