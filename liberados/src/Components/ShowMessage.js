import React from 'react'
import gif1 from '../gif1.gif'
import gif2 from '../gif2.gif'
import gif3 from '../gif3.gif'


const ShowMessage = ({ avg }) => {
   let message = {
      text: '',
      emoji: '', 
      banner: ''
   }

   if (avg >= 80) {
      message.text = 'Excelente';
      message.emoji = '🎉';
      message.banner = gif1
   }
   else if (avg >= 70) {
      message.text = 'Muy bien';
      message.emoji = '🥂'
      message.banner = gif2
   }
   else {
      message.text = 'Seguí practicando';
      message.emoji = '💪'
      message.banner = gif3
   }

   return (
      <>
         <h1 className='emoji'>{message.emoji}</h1>
         <h1>{message.text}</h1>
         <img src={message.banner} alt="Banner" style={{height: "80%", flex: 1, width: '100%'}} />
      </>
   )
}

export default ShowMessage