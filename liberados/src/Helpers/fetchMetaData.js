import axios from "axios";


export const getData = async () =>{
    const res = await axios.get("");
    return res.data;
}

/*
export const Data = async (genre) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=13d84b90cb476a717b73b72950066c86&with_genres=${genre}`);
    return res.data;
}
*/
