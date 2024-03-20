import axios from './axios';


export const fetchDogsData = async () => {
    try {
        const response = await axios.get("/breeds/list/all");
        return response?.data
        
    }
    catch (err: any){
        if (err instanceof Error) {
            console.log(err, "error message")
        } else {
            console.log( "unexpected error", err)
        }
    }
}

export const fetchDogsSubBreed = async (breed: string) => {
    try {
        const response = await axios.get(`/breeds/${breed}/all`);
        return response?.data
        
    }
    catch (err: any){
        if (err instanceof Error) {
            console.log(err, "error message")
        } else {
            console.log( "unexpected error", err)
        }
    }
};

export const fetchBreedImages = async (breed: string, number: string) => {
    try{
        const response = await axios.get(`/breed/${breed}/images/random/${number}`)
        return response?.data
    } 
    catch (err: any){
        if (err instanceof Error) {
            console.log(err, "error message")
        } else {
            console.log("unexpected error", err)
        }
    }
};

export const fetchSubBreedImages = async (breed: string, subBreed: string, number: string) => {
    try {
        const response = await axios.get(`/breed/${breed}/${subBreed}/images/random/${number}`)
        return response?.data
    }
    catch (err: any) {
        if (err instanceof Error) {
            console.log(err, "error message")
        } else {
            console.log("unexpected error", err.message)
        }
    }
}