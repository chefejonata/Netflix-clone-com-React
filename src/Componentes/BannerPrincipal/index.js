import Carrocel from '../Carrocel'
import TextPrincipal from '../TextPrincipal'
import './BannerPrincipal.css'




function BannerPrincipal () {
    return (
        <div className='BannerShadon'>
            <div className='BannerImg'>
                <TextPrincipal className='text' />
                 <Carrocel />
            </div>
        </div>

    )
}

export default BannerPrincipal

