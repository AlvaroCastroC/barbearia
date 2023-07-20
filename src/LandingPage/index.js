import React,{useState} from 'react';

import './style.css';
import '../ResponsivePage/responsive.css';

export default function LadingPage () {

    const modoLight = 'bg-light';
    const modoDark = 'bg-Dark';


    const [novoFundo, setNovoFundo] = useState(true)

        const alterarCor = () => {
            setNovoFundo(!novoFundo);
          };

    return(
        <div className={novoFundo ? modoLight : modoDark}>

            <header>
                <div className=' container-limite'>
                    <div>
                        <img src='assets/barbearia-logo.png' className='logoMarca' alt='Logo da página' title='logo'/>
                    </div>

                    <div>

                        <button onClick={alterarCor} className= {novoFundo ? modoLight : modoDark}> 

                            <img className="icone-butao" src={novoFundo ? 'assets/sun.png' : 'assets/moon.png'} alt="icone"/>

                            {novoFundo ? `Light` : `Dark`}

                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section className='secao-banner'></section>

                <section className="secao-texto ">
                    <div className="container-limite">
                        
                        <h1>Bem-vindo a Barber Shop</h1>

                        <p className="primeiro-paragrafo">
                            Nossa barbearia sempre oferece profissionais de qualidade e
                            estamos prontos para lidar com suas maiores expectativas.
                        </p>

                        <p className="segundo-paragrafo">
                            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
                            uma equipe premiada que demonstrou o talento de mestres barbeiros
                            em vários concursos de estilo. Deixe nosso barbeiro ser seu
                            estilista pessoal e você nunca ficará desapontado.
                        </p>
                            
                        <p className='assinatura'>Álvaro de C. Cunha</p>
                    </div>
                </section>
            </main>
        </div>

    );
}