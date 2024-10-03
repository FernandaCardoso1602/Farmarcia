import React from 'react'
import './Farmarcia.css'

function Cadastro() {
  const [fila, setFila] = useState([]);
  const [senhaAtual, setSenhaAtual] = useState('');


  const gerarSenha = (tipo) => {
    const novoNumero = fila.filter(s => s.tipo === tipo).length + 1;
    const novaSenha = { tipo, numero: novoNumero };
    setFila([...fila, novaSenha]);
  };


  const chamarSenha = () => {
    if (fila.length === 0) {
      alert('A fila está vazia!');
      return;
    }


    // Separar as senhas preferenciais e normais
    const preferenciais = fila.filter(s => s.tipo === 'Preferencial');
    const normais = fila.filter(s => s.tipo === 'Normal');


    let senhaChamando;


    if (preferenciais.length > 0) {
      // Chama a senha preferencial com o menor número
      senhaChamando = preferenciais.reduce((prev, curr) => (prev.numero < curr.numero ? prev : curr));
    } else if (normais.length > 0) {
      // Chama a senha normal com o menor número
      senhaChamando = normais.reduce((prev, curr) => (prev.numero < curr.numero ? prev : curr));
    }


    // Atualiza a fila removendo a senha chamada
    setFila(fila.filter(s => s !== senhaChamando));
    setSenhaAtual(`Senha chamada: ${senhaChamando.tipo} ${senhaChamando.numero}`);
  };  


  return (
   
   <div>
      <div style={{ padding: '20px' }}>
      <h1>Sistema de Senhas - Farmácia</h1>
      <div>1
        <button className='page1' onClick={() => gerarSenha('Normal')}>Gerar Senha Normal</button>
        <button className='page1' onClick={() => gerarSenha('Preferencial')}>Gerar Senha Preferencial</button>
        <button className='page1' onClick={chamarSenha}>Chamar Senha</button>
      </div>
      <h2>{senhaAtual}</h2>
      <h3>Fila:</h3>
      <ul>
        {fila.map((senha, index) => (
          <li key={index}>{`${senha.tipo} ${senha.numero}`}</li>
        ))}
      </ul>
      {fila.length === 0 && <p>A fila está vazia.</p>}
    </div>


  
  </div>

  )
}

export default Cadastro;
