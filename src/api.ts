import axios from "axios";

const request = 
    axios.create({
        baseURL: "https://jsonplaceholder.typicode.com"
    })


export const api = {
 getAlbum: async() => {
    const req = await request("/albums");
    return req.data
 },

 getAlbums: async(id:string | void) => {
    const req = await request(`/albums/${id}`);
    return req.data
 },

 getPhoto: async(id:string | void) => {
    const req = await request(`/albums/${id}/photos`);
    return req.data
 },

 getPhotoAlbum: async(id: string | void) => {
    const req = await request(`/photos/${id}`)
    return req.data
 }
}
   