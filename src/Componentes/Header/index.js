import './Header.css'
import logo from '../../assets/logo-netflix.png'
import lupa from '../../assets/lupa.png'
import presente from '../../assets/presente.png'
import sino from '../../assets/sino.png'
import perfil from '../../assets/foto.png'

const listaMenu = ['Inicio','Séries','Filmes','Mais Recentes','Minha Lista']
const itemMenu = [lupa,presente,sino,perfil]



function Header () {
    return (
        <div className='header'>

            <div className='header__navegacao'>
                <img className='header__logo' src={logo} />
                
                <ul className='header__listaMenu'>
                    {listaMenu.map((itens) => <li className='header__itensMenu'><a className='header__link'>{itens}</a></li>)}
                </ul>
            </div>
            
            <div className='header__icones'>
        
                    {itemMenu.map(img => <img key={img} className='perfil' src={img}/>)}

            </div>        
      
        </div>


    )
}

export default Header