import React from 'react'
import Farmarcia from '../Farmarcia'

function VariedadeDeProdutos() {

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
    Nossa seleção de produtos é extensa e cuidadosamente escolhida para atender a uma ampla gama de necessidades. 
 Medicamentos: Temos desde os remédios mais comuns, usados no dia a dia, até os de uso contínuo e especializados para condições específicas.
 Higiene Pessoal e Cosméticos: Oferecemos produtos para cuidados diários com a pele, cabelos, e higiene bucal, garantindo que você tenha acesso às melhores opções para manter sua rotina de beleza e saúde.
 Suplementos Vitamínicos: Disponibilizamos uma variedade de suplementos para atender a diferentes necessidades nutricionais, desde vitaminas para aumentar a imunidade até aqueles que auxiliam na saúde dos ossos e articulações.
 Itens de Bem-Estar: Produtos como chás, óleos essenciais e equipamentos de cuidados pessoais, todos selecionados para melhorar sua qualidade de vida e bem-estar geral.
    </p>

      </nav>

     {pagina}
    </div>
  )
}

export default VariedadeDeProdutos
