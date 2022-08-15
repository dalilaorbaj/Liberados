import axios from "axios";

const getData = async (grupo) =>{
    const res = await axios.get(`http://localhost:5001/preguntas/${grupo}`);
    const randQuestions = res.data.sort(() => Math.random() - 0.5)
    return randQuestions;
}
export default getData;
