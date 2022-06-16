import { LOCALSTORAGE_TOKEN_KEY } from "../utils";

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
            ...custommConfig,
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
        const data = await response.JSON();
        
        if (response.success){
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

const getPosts = (page,limit) => {
    return customFetch();
}