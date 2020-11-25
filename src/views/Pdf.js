import React, { useEffect } from 'react'
import axios from 'axios'

export default function Pdf () {
  useEffect(() => {
    document.getElementById('enlaceDescargarPdf').click()

  }, [])

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <p>'Hola Mundo'</p>
      <object
        data={require('../KIO.pdf')}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <br/>
        <a href={require('../KIO.pdf')} id="enlaceDescargarPdf"
           download="ReactJS.pdf"
        >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
      </object>
    </div>
  )
}

// componentDidMount() {
//   if(typeof window.orientation !== "undefined"){
//     document.getElementById('enlaceDescargarPdf').click();
//     window.close();
//   }
// }


