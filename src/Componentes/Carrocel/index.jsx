import './Carrocel.css'
import img1 from '../../assets/filmes/image1.png'
import img2 from '../../assets/filmes/image2.png'
import img3 from '../../assets/filmes/image3.png'
import img4 from '../../assets/filmes/image4.png'
import img5 from '../../assets/filmes/image5.png'
import img6 from '../../assets/filmes/image6.png'
import img7 from '../../assets/filmes/image7.png'
import img8  from '../../assets/filmes/image8.png'
import img9 from '../../assets/filmes/image9.png'
import img10 from '../../assets/filmes/image10.png'
import img11 from '../../assets/filmes/image11.png'
import img12 from '../../assets/filmes/image12.png'
import img13 from '../../assets/filmes/image13.png'
import img14 from '../../assets/filmes/image14.png'
import img15 from '../../assets/filmes/image15.png'

const lista = [img1,img2,img3,img4,img5,img6,img7]
const lista2 = [img8,img9,img10,img11,img12,img13, img14, img15]


function Carrocel () {
    return (
        <div>
        <div>
            <h2 className='titulo'>Populares na Netflix </h2>
        </div>
        
        <div className='filmes'>
            
            {lista.map((imagens) => { 
                return <img className='post' src={imagens} alt="lalala" />
            })}
        </div> 

        <div>
            <h2 className='titulo'>Pra Você </h2>
        </div>
        <div className='filmes'>
            
            {lista2.map((imagens) => { 
                return <img className='post' src={imagens} alt="lalala" />
            })}
        </div> 
        </div>
        
    )
}

export default Carrocel