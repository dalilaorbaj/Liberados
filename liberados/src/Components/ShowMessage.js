import React from 'react'
import gif1 from '../gif1.gif'
import gif2 from '../gif2.gif'
import gif3 from '../gif3.gif'


const ShowMessage = ({ avg }) => {
   let message = { 
      banner: ''
   }

   if (avg >= 80) {
      message.banner = gif1
   }
   else if (avg >= 70) {
      message.banner = gif2
   }
   else {
      message.banner = gif3
   }

   return (
      <>
         <img src={message.banner} class="mb-5" alt="Banner" style={{height: "80%", flex: 1, width: '100%'}} />
      </>
   )
}

export default ShowMessage