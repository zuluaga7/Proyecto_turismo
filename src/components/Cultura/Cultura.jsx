import React from 'react'
import './Cultura.css'
import { Link } from 'react-router-dom'

function Cultura() {
  return (  
    <div className='ay'>
      <h1 id='b-c'>Cultura paisa</h1>
      <p>El departamento de Antioquia, la tierra de la cultura paisa, innovación e 
      impresionantes escenarios naturales. El departamento de Antioquia hace parte de los Andes Occidentales Colombianos. 
      La región de escenarios majestuosos como montañas que destilan olor a café, pueblos coloridos y nieves perpetuas. 
      El territorio donde se vive un clima primaveral y su amable gente te hará sentir como en casa.</p>
      <h3 id='b-c'>Historia</h3>
      <p>El origen de la cultura antioqueña empezó con las comunidades indígenas como los kalina o pueblo caribe, catía, natube, 
        tahamíe y quimbaya, de la cual hoy solo permanece un 0,5 % del total de su población inicial.  Luego, con la llegada de los españoles,
         especialmente los vascos, se formó una nueva civilización que influenció enormemente en la gastronomía, lengua, costumbres, etc.
         La cultura paisa se caracteriza por su desarrollo e innovación, siendo el único territorio del país en tener metro y tranvía, además de una
        línea especial de teleférico.  Asimismo, es una región que promueve el arte y se ven escenarios como el Museo de Antioquia, la Plaza de Botero,
        Parque Explora y el Museo Castillo.</p>
        <h3 id='b-c'>4 claves simbólicas de Antioquia</h3>
        <p>El departamento tiene cuatro símbolos que hacen parte de su identidad: desde lo alto, el triunfo, el superlativo y de oruga a mariposa.</p>
      <p>Desde lo alto es un símbolo que habla sobre la superación de obstáculos y del proceso de llegar a la meta. Luego, el triunfo es una apología al esfuerzo 
y a la satisfacción de haber llegado a la cima. Por su parte, el superlativo es la representación de los logros que ha tenido el antioqueño a lo largo de la historia. 
Por último, de oruga a mariposa es la simbología de la transformación de estigmas, de una cultura alguna vez violentada a una comunidad cultural y artísticas.</p>
<h3 id='b-c'>Festividades</h3>
        <p>En el departamento de Antioquia hay cuatro festividades importantes las Fiestas del Maíz en Sonsón, las Fiestas del Plátano en Sabaneta, las 
          Fiestas de las Frutas en Sopetrán y la Feria de las Flores en Medellín.</p>
        <p>Esta última, ha traído consigo dos tipos de culturas: la del silletero que simboliza la fortaleza del campesino floricultor y la del arriero
           que es ejemplo de perseverancia y trabajo duro. Ambas propias del ADN antioqueño.</p>
        <p>Finalmente, la historia del departamento de Antioquia es de la región que se levanta pese a los obstáculos y aprende del pasado. También es la
           cultura que invita a su gente a sentirse orgullo del camino recorrido, pero también a continuar innovando en arte, cultura y tecnología.</p>
<section id='a-d'>
  
    <Link id='p-y' to="/">Volver</Link>
    </section>
    </div>
    
  )
}

export default Cultura
