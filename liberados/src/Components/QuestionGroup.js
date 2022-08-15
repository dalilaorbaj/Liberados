import React, {useState, Link} from "react";
import '../global.css';

const QuestionGroup = () => {

  const [grupo, setGrupo] = useState('');

  const handleMensaje = (grupo) => {
    setGrupo(grupo)
  }

  return (
    <>        
      <div className="centrado">  
        <h2>¿Cómo se llama tu grupo?</h2>
        <form>

          <input id="nombre" type="text" name="grupo" className="u-full-width mb-3" placeholder="Nombre del grupo" value={grupo} onChange={() => console.log()}/> <br/>
          
          <button className="buttonForm" id="btn-sbmt">Enviar</button>

        </form>
      </div>
    </>
  );
}

export default QuestionGroup;