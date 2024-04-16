import {useEffect, useState} from "react"
import Background from "./Components/Background/Background.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Footer from "./Components/Footer/Footer.jsx"

const App = () => {
  let heroData = [
    {text1:'Shop Online',text2:'Today'},
    {text1:'Shop Online',text2:'Today'},
    {text1:'Shop Online',text2:'Today'}
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=> {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
      <Footer/>
    </div>
  )
}

export default App