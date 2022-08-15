import axios from "axios";

const getData = async (grupo) =>{
    let res
    if (!grupo) {
        res = await axios.get(`https://liberados-api.herokuapp.com/preguntas`);
    } else {
        res = await axios.get(`https://liberados-api.herokuapp.com/preguntas/${grupo}`);

    }
    const randQuestions = res.data.sort(() => Math.random() - 0.5)
    return randQuestions;
}
export default getData;
