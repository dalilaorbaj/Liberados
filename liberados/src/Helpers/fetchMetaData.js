import axios from "axios";

const getData = async (grupo) =>{
    let res
    if (!grupo) {
        try {
            res = await axios.get(`https://liberados-api.herokuapp.com/preguntas`); 
        } catch (error) {
            return []  
            
        }
    } else {
        try {
            res = await axios.get(`https://liberados-api.herokuapp.com/preguntas/${grupo}`);    
        } catch (error) {
            return []  
            
        }
    }
    const randQuestions = res.data.sort(() => Math.random() - 0.5)
    return randQuestions;
}
export default getData;
