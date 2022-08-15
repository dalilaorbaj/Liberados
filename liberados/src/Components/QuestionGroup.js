import React, {useState, Link} from "react";
import '../global.css';

const QuestionGroup = () => {

  const [grupo, setGrupo] = useState('');
/*
  const guardarGrupo = (value) =>{
    const x = value;
    setGrupo(x);
  }
*/
/*
const onChangeInput = (e) =>{
    setGrupo({...grupo, [e.target.value]:e.target.value})
}
*/
const handleSubmit = (e) =>{
    e.preventDefault()
    setGrupo(e);
  }

        return (
          <>        
          <div className="centrado">  
          <h2>¿Cómo se llama tu grupo?</h2>
          <form >
              <input id="nombre" type="text" name="grupo" className="u-full-width mb-3" placeholder="Nombre del grupo" value={grupo}/> <br/>
              <Link to="/jugar">
                <button className="buttonForm" id="btn-sbmt" onClick={handleSubmit}>Enviar</button>
              </Link>  
          </form>
          </div>
      </>
        );
      }

export default QuestionGroup;