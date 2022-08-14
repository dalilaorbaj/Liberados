import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../global.css'
import './Question.css'
import React, { useState } from 'react'
import styled from 'styled-components'
import { randQustions } from '../Components/Quiz'
import ShowMessage from '../Components/ShowMessage';
import { Box, Button } from '../Components/UIElements';
import ShowConfetti from '../Components/ShowConfetti';
import Navbar from '../Components/Navbar'
const BasicGrid = styled.div`
   gap: 1rem;
   margin: 1rem 0;
`
const Juego = () => {
   const [currentIndex, setCurrentIndex] = useState(0)
   const [endQuiz, setEndQuiz] = useState(false)
   const [score, setScore] = useState(0);
   const [avg, setAvg] = useState(0);
   const [showAns, setShowAns] = useState(false);

     //function to calc score and show correct answer
   const handleAnswerClick = (isCorrect, e) => {
      setShowAns(true)
      if (isCorrect) {
         setScore((prev) => prev + 1);
      }
      /*setTimeout(() => {
         nextQuestion()
      }, 1800)*/
      nextQuestion();
   }

     //function to go to next question if within bounds of quiz length and hide correct answer 
     // if ouside the bounds of the quiz array, the quiz will end
   const nextQuestion = () => {
      setShowAns(false)
      if (currentIndex === randQustions.length - 1) {
         endOfQuiz()
      }
      else {
         setCurrentIndex(prev => prev + 1);
      }
   }

     //function to pre-emptively end quiz
   const seeResults = () => {
      setEndQuiz(true)
        setAvg((score / currentIndex) * 100)
   }

   const endOfQuiz = () => {
      setEndQuiz(true)
      setCurrentIndex(prev => prev + 1)
        setAvg((score / currentIndex) * 100)
      seeResults()
   }

     //function to result all variables 
   const reset = () => {
      setEndQuiz(false);
      setCurrentIndex(0);
      setScore(0)
      setShowAns(false)
   }
   if (endQuiz) {
      return (
         <div className='fondo' style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
            {avg >= 80 &&
               <ShowConfetti whenToShow={endQuiz} />
            }
            <Box >
               <div className="spacer"></div>
               <div className="top mt-4" style={{ textAlign: 'center'}}>
                  <ShowMessage avg={avg} />
                  <p className="text">Hiciste <strong>{score}</strong> bien de <strong>{currentIndex}</strong> = <strong>{avg.toFixed(1)}%</strong></p>
               </div>
               <Button onClick={reset} style={{backgroundColor:'#e39726', color:'white'}}>Reiniciar juego</Button>
            </Box>
            </div>
         
      )
   }

   return (
      <>
      <Navbar/>
      <div className='fondo'style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
         <Box className='question-box m-full-y' >
            <div className="top mt-4">
               <h6 className='top-text mt-4'>Pregunta {currentIndex + 1} de {randQustions.length}</h6>
               <div className="question">
                  <h2 className='question-text text'>{randQustions[currentIndex].question}</h2>
               </div>
            </div>

            <BasicGrid className="answers-row middle mb-5">
               {randQustions[currentIndex].answers.map((answer, key) => (
                  <Button
                     className={ "mb-4" + (showAns && answer.isCorrect ? 'ans' : '')}
                     onClick={(e) => { handleAnswerClick(answer.isCorrect, e) }}
                     key={key}
                     disabled={showAns}
                     style={{backgroundColor:'#e39726', color:'white'}}
                  >
                     {answer.answerText}
                  </Button>
               ))}
            </BasicGrid>

{/*         <div className="bottom">
               <Button
                  className='secondary'
                  onClick={()=>nextQuestion()}
                  disabled={showAns || currentIndex === 0}>
                  Ver resultados
               </Button>
            </div>
 */}
         </Box>
      </div>
      </>   )
}


export default Juego;