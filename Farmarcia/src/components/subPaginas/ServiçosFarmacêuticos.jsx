import React from 'react'
import Farmarcia from '../Farmarcia'
function ServiçosFarmacêuticos() {

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
     Além de produtos, oferecemos vários serviços para apoiar sua saúde de forma integral:
 Medição de Pressão Arterial: A medição regular da pressão arterial é fundamental para prevenir e monitorar problemas cardíacos. Nosso serviço é realizado por profissionais capacitados que oferecem não apenas a medição, mas também orientações sobre como manter uma pressão saudável.
 Aplicação de Vacinas: Proteção contra diversas doenças sazonais e crônicas. Nossos profissionais são treinados para aplicar vacinas com segurança e fornecer todas as informações necessárias para garantir que você e sua família estejam protegidos.
 Orientação sobre Medicamentos: Temos farmacêuticos disponíveis para esclarecer dúvidas sobre o uso correto de medicamentos, incluindo interações e possíveis efeitos colaterais. Isso é crucial para garantir que suas prescrições sejam usadas da maneira mais eficaz e segura possível.
 Acompanhamento Farmacoterapêutico: Oferecemos acompanhamento contínuo para pacientes em tratamentos prolongados. Isso inclui monitorar a eficácia dos medicamentos, ajustar tratamentos conforme necessário e garantir que você esteja obtendo os melhores resultados possíveis.
     </p>

      </nav>

     {pagina}
    </div>
  )
}

export default ServiçosFarmacêuticos
