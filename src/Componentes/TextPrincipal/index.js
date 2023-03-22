import './TextPrincipal.css'
import logoPrincipal from '../../assets/mid.png'
import Botao from '../Botao'

import Play from '../../assets/play.png'
import plus from '../../assets/plus.png'



function TextPrincipal () {
    return (
        <div className='conteudo'>
            <img className='conteudo__img' src={logoPrincipal} alt='Logo The Midnight Gospel' />
            <h2 className='conteudo__text'>Um apresentador de espaçocast visita mundos malucos em seu simulador de universos e explora questões existenciais sobre a vida, a morte e muito mais.</h2>
                <div className='botoes'>
                    <Botao nome="Assistir" imagem={Play} />
                    <div className='botao2'>
                        <img src={plus} />
                        <h4>Meus favoritos</h4>
                    </div>  
                </div>


        </div>

    )
}

export default TextPrincipal