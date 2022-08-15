import axios from "axios";

const getData = async () =>{
    const res = await axios.get("http://localhost:5001/preguntas");
    const randQuestions = res.data.sort(() => Math.random() - 0.5)
    return randQuestions;
}
export default getData;
