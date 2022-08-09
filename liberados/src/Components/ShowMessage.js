import React from 'react'

const ShowMessage = ({ avg }) => {
   let message = {
      text: '',
      emoji: ''
   }

   if (avg >= 80) {
      message.text = 'Excelente';
      message.emoji = '🎉';
   }
   else if (avg >= 70) {
      message.text = 'Muy bien';
      message.emoji = '🥂'
   }
   else {
      message.text = 'Seguí practicando';
      message.emoji = '💪'
   }

   return (
      <>
         <h1 className='emoji'>{message.emoji}</h1>
         <h1>{message.text}</h1>
      </>
   )
}

export default ShowMessage