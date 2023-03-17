import './Botao.css'

function Botao({nome, imagem}) {
    return (
        <div className='botao'>
            <img src={imagem} />
            <h4>{nome}</h4>
        </div>
    )
}


export default Botao