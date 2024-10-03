import React from 'react'
import Farmarcia from '../Farmarcia'

function OrientaçãoSobreMedicamentos() {

     const [pagina, setPagina] = useState()

  return (
    <div>
    
      <nav className="Header"> 
        <img className='logo' src="farmarcia-logo-pq.PNG.png" alt="Imagem da farmácia" />
        <p>Bem-vindo a Farmárcia!</p>

        <button class="btn" onClick={() => setPagina(<Farmarcia/>)} >
        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
        </svg>

    <span class="text">Voltar para a página inicial</span>
</button>

   <p>
   Nossos farmacêuticos não apenas entregam os medicamentos, mas também fornecem orientações detalhadas sobre como usá-los corretamente. Isso inclui:
 Uso Correto: Informações sobre a dosagem correta, horários de administração e duração do tratamento.
 Interações Medicamentosas: Explicação sobre como diferentes medicamentos podem interagir entre si, potencialmente alterando seus efeitos.
 Efeitos Colaterais: Orientações sobre possíveis reações adversas, como identificá-las e o que fazer caso ocorram.
 Dicas Práticas: Conselhos sobre como armazenar os medicamentos e o que fazer se esquecer uma dose, garantindo a eficácia do tratamento.
   </p>

      </nav>

     {pagina}
    </div>
  )
}

export default OrientaçãoSobreMedicamentos
