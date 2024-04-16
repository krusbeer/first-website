import './Background.css';
import Video123 from './../../assets/Video123.mp4'
import Bild1 from './../../assets/Bild1.png'
import Pic2 from './../../assets/Pic2.png'
import Img3 from './../../assets/Img3.png'

const Background = ({playStatus,heroCount}) => {

    if (playStatus) {
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={Video123} type='video/mp4' />
            </video>
        )
    }
    else if(heroCount===0)
    {
        return <img src={Bild1} className='background fade-in' alt="" />
    }
    else if(heroCount===1)
    {
        return <img src={Pic2} className='background fade-in' alt="" />
    }
    else if(heroCount===2)
    {
        return <img src={Img3} className='background fade-in' alt="" />
    }
}

export default Background