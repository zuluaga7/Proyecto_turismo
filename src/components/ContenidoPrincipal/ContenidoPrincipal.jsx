import React from 'react'
import '../ContenidoPrincipal/ContenidoPrincipal.css'
import indio from '../../assets/img/cascada_indio.jpg'
import mapa_ant from '../../assets/img/mapa_ant.webp'


export default function ContenidoPrincipal() {
  return (
    <>
      <div className='cuerpo'>
        <h1 className='titulo'>Antioquia: Diamante escondido del turismo en Colombia</h1>
        <main>
          <section>
            <aside className='texto'>
              <p>
                <strong>Antioquia</strong> es uno de esos lugares en los que no paras de sorprenderte. todo aquel que quiera hacer turismo en Colombia
                debería apartar unos días solo para recorrer este mágico departamento.

                Hoy, quiero que conozcamos un poquito de todo lo que tiene para ofrecer.
                A Medellín se le conoce como la ciudad de la eterna primavera, la segunda ciudad de Colombia y capital del Departamento de Antioquia. Se trata de un lugar
                fascinante que fusiona la modernidad con la cultura paisa y la amabilidad colombiana.

                Lugares que visitar en Antioquia, Colombia:
              </p>
              <p> <strong>San Rafael:</strong> El lugar ideal para conectar con la naturaleza. San Rafael resulta el escenario perfecto para la práctica de
                deportes como senderismo y el ciclismo, así como el avistamiento de aves gracias a la rica biodiversidad en fauna y flora.
                Está ubicado a solo hora y media desde la capital.</p>
              <p><strong>Jérico:</strong>Un pueblo de montaña que te encantará. Su principal característica es la muestra cultural que consigues en cada una de sus calles y museos,
                combinada con la excelente atención de los lugareños, razón por la que forma parte de los Pueblos Patrimonio de Colombia.</p>
              <p><strong>Guatapé:</strong>Seguramente has visto fotos del monolito gigantesco con cerca de 650 escalones, insignia del turismo en Colombia, pues te cuento que está ubicado
                en el pueblo de Guatapé y cuenta con 220 metros de alto.
                No dejes de ver todas las actividades y tours que tenemos para ti…
              </p>
              <p><strong>¿¿¿listo para vivir las experiencias???</strong></p>
              <img id='imagen' src={mapa_ant} alt="" />

            </aside>


          </section>

        </main>


      </div>
    </>


  )
}