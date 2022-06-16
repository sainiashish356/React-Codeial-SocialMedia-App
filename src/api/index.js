import { API_URLS,LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFetch = async (url , {body , ...customConfig }) => {
         //got the token
        const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

        

        //setting headers
        const headers = {
            //setting the content type
            'content-type': 'application/json',
            //accepting applicaiton json we're dealing with json means we're sendind nd recieving json
            Accept: 'application/json'
        }

        if (token) {
            headers.Authorization = `Bearer ${token}`
        }

        const config = {
            ...customConfig,
            header: {
                ...headers,
                ...customConfig.headers,
            },
        };
            //if there is a body in second arguement we stringify
        if (body){
            config.body = JSON.stringify(body);
        }

    try{ 
        const response = await fetch(url,config);
        const data = await response.json();
        
        if (data.success){
            return{
                data: data.data,
                success: true
            }
        }
            throw new Error(data.message);
    }catch(error){
        console.log("error");
        return{
            message: error.message,
            success: false
        }
    }
};

export const getPosts = (page = 1 , limit = 5) => {
    return customFetch(API_URLS.posts(page, limit), {
        method: 'GET'
    });
}