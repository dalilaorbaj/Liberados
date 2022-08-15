import React, {useState, Link} from "react";
import '../global.css';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";


const QuestionGroup = () => {

  const [grupo, setGrupo] = useState('');

  const navigate = useNavigate()


  const handleMensaje = (grupo) => {
    setGrupo(grupo)
  }

  

  

  const {values, handleChange, handleSubmit} = useFormik({
      initialValues: {
        groupName: '',
        
      },
      
      onSubmit: ({groupName}) => {
        if (groupName.trim().length > 0) {
          navigate(`/jugar/${groupName}`)
        }


      },
    });


  return (
    <>        
      <div className="centrado">  
        <h2>¿Cómo se llama tu grupo?</h2>
        <form onSubmit={handleSubmit}>

          <input id="groupName" name="groupName" type="text" className="u-full-width mb-3" placeholder="Nombre del grupo" value={values.groupName} onChange={handleChange}/> <br/>
          
          <button type="submit" className="buttonForm" id="btn-sbmt">Enviar</button>

        </form>
      </div>
    </>
  );
}

export default QuestionGroup;