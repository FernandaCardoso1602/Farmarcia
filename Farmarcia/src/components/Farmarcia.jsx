import React, { useState } from 'react'
import './Farmarcia.css'
import Cadastro from './Cadastro';
import AtendimentoPersonalizado from './subPaginas/AtendimentoPersonalizado';
import VariedadeDeProdutos from './subPaginas/VariedadeDeProdutos';
import ServiçosFarmacêuticos from './subPaginas/ServiçosFarmacêuticos';
import OrientaçãoSobreMedicamentos from './subPaginas/OrientaçãoSobreMedicamentos';
import AcompanhamentoFarmacoterapeutico from './subPaginas/AcompanhamentoFarmacoterapeutico';


function Farmarcia() {
     const[pagina1, setPagina1] = useState(<Cadastro/>)
  return (
   
        <div>
        

  
  <p className='texto'>
  Estamos extremamente felizes em anunciar que a Farmárcia está sob nova direção e com uma nova marca! Esta mudança representa nosso compromisso renovado em oferecer a você e sua família um atendimento de qualidade excepcional, com uma ampla variedade de produtos e serviços farmacêuticos. <br /> <br />

        O que você pode esperar da nova Farmárcia? <br /> <br />
        <header>

<button class="botão" onClick={() => setPagina1(<AtendimentoPersonalizado/>)} >Atendimento Personalizado</button> <br /><br />

<button class="botão" onClick={() => setPagina1(<VariedadeDeProdutos/>)} >Variedade de Produtos</button> <br /><br />

<button class="botão" onClick={() => setPagina1(<ServiçosFarmacêuticos/>)} >Serviços Farmacêuticos</button> <br /><br />

<button class="botão" onClick={() => setPagina1(<OrientaçãoSobreMedicamentos/>)} >Orientação sobre Medicamentos</button> <br /><br />

<button class="botão" onClick={() => setPagina1(<AcompanhamentoFarmacoterapeutico/>)} >Acompanhamento Farmacoterapêutico</button> <br /><br />
</header>
        
        Venha conferir todas as novidades que preparamos com muito carinho para você. Nossa missão é garantir que você tenha uma experiência positiva e encontre tudo o que precisa para cuidar da sua saúde e bem-estar. <br /> <br />
        Farmárcia - Cuidando de você e da sua saúde!
        </p>

        {pagina1}
  </div>    
       
    
  )
}

export default Farmarcia;
