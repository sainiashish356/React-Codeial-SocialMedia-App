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

        // Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens.

        if (token) {
            headers.Authorization = `Bearer ${token}`
        }

        const config = {
            ...customConfig,
            header: {
                ...headers,
                //if we have some extra config of our header so we are spreading it here
                ...customConfig.headers,
            },
        };
            //if there is a body in second arguement we stringify and we are adding our body in config b,coz it will sent into our fetch function
        if (body){
            config.body = JSON.stringify(body);
        }

    try{ 
        const response = await fetch(url,config);
        const data = await response.json();
        
        if (data.success){
            return{
                //we are writing data.data because we have a common type of data JSON
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

export const login = (email, password) => {
    return customFetch(API_URLS.login(), {
      method: 'POST',
      body: { email, password },
    });
  };