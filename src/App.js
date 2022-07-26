import './App.css';
import gif from "./assets/myGif.gif";
import img1 from './assets/image1.png';
import img2 from './assets/image2.jpeg';
import img3 from './assets/image3.jpeg';
import img4 from './assets/image4.jpeg';
import img5 from './assets/image5.jpeg';
import img6 from './assets/mohssine.jpeg';
import img7 from './assets/image6.jpeg';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import reddit from './assets/reddit.png';
import tiktok from './assets/tiktok.png';
import discord from './assets/discord.png';
import twitter from "./assets/twitter.png"
import gif1 from './assets/gif1.gif';
import gif2 from './assets/gif2.gif';
import gif3 from './assets/gif3.gif';
import gif4 from './assets/gif4.gif';
import { useEffect, useState } from 'react';
import TextTransition,{presets} from 'react-text-transition';
import {Link} from 'react-scroll';
import menuBurger from "./assets/menu.png"

function App() {
  const texts = [
    "Celebrating 100-year anniversary of the discovery of Tutankhamun's tomb",
    "Exclusive and rare colorized pictures reveal incredible Detail",
    "Documenting the discovery of king tut's tomb 100 years ago",
    "Comming soon..."
  ];
  
  const [index,setIndex] = useState(0);
  const [toggle,setToggle] = useState(false)
  const [hide,setHide] = useState("none")
  useEffect(()=>{
    const intervalId = setInterval(()=>
      setIndex(index + 1),3500);
    return ()=> clearInterval(intervalId)
  },[index]);
  
  const toggleMenu =()=>{
    setToggle(!toggle)
  }

  useEffect(()=>{
    if (toggle) {
      setHide('flex')
    }else{
      setHide('none')
    }
  },[toggle]);
 
  return (
    <div className="App">

      <div className="header">
        <div className="seccions">
          <h2>TOMBS</h2>
          <div className='parts'>
          <Link className='pages' to="home" spy={true} smooth={true}><h3>Home</h3></Link>
          <Link className='pages' to="about" spy={true} smooth={true}><h3>About</h3></Link>
            <Link className='pages' to="nfts" spy={true} smooth={true}><h3>Featured</h3></Link>
            <Link className='pages' to="team" spy={true} smooth={true}><h3>Team</h3></Link>
            <Link className='pages' to="join" spy={true} smooth={true}><h3>Join</h3></Link>
            <img onClick={()=> toggleMenu()} className='burger' src={menuBurger} alt="" />
          </div>
        </div>
        <div className="listContainer">
        <div style={{display:hide}} className="list">          
        <Link className='pages' to="home" spy={true} smooth={true}><h3>Home</h3></Link>
        <Link className='pages' to="about" spy={true} smooth={true}><h3>About</h3></Link>
            <Link className='pages' to="nfts" spy={true} smooth={true}><h3>Featured</h3></Link>
            <Link className='pages' to="team" spy={true} smooth={true}><h3>Team</h3></Link>
            <Link className='pages' to="join" spy={true} smooth={true}><h3>Join</h3></Link>
        </div>
        </div>
        <center id="home" className="intro">
        <div className="intro">
          <TextTransition className='introText' springConfig={presets.stiff}>
            {texts[index % texts.length]}
          </TextTransition>
        </div>
        <button className='buy'>Buy on opencea</button>
        </center>
      <img className='gif' src={gif} alt=""/>
      </div>
      <div className="aboutContainer">

<h1 id='about'>ABOUT:</h1>
       <p>Discovery in Color is an NFT project made by a team of colorists from around the world pationated with history and addiction of clorization ,in a celebration of the 100 year anniversary of the discovery of all time .
with a collection of rare colorized pictures from the discovery of the king Tutankamuns tomb 1925, taken from Harry Burton's original black and withe glass negatives . Now colorized ,thanks to colonization we can now see them exactly as they were discovered by Howard Carter and the local Egyptian people 100 years ago.</p>
<h1>The colorization process:</h1>
<p>The colorization process uses digital tools to restore the damage that occurs to original negatives over time, then grafts individual layers of color into the original black and white photograph placing the viewer directly in the scene to provide a sense of realism and a glimpse at what the original photographer might have seen at the moment of discovery.</p>


<div style={{display:"none"}} className="profiles2">
  <div className="social">
    <img src={facebook} alt="" />
    <p>FACEBOOK</p>
  </div>
  <div className="social">
    <img src={instagram} alt="" />
    <p>INSTAGRAM</p>
  </div>
  <div className="social">
    <img src={discord} alt="" />
    <p>DISCORD</p>
  </div>
  
</div>



<h1 className='newH1' id='nfts'>Featured collection:</h1>
      <div className="nftsContainer">
      <div className="gifContainer">
      <img className='gif1' src={gif1} alt="" /><br />
      <img className='gif1' src={gif2} alt="" /><br />
      <img className='gif1' src={gif3} alt="" /><br />
      <img className='gif1' src={gif4} alt="" />
      </div>
      <p style={{margin:"5px",fontSize:"20px",marginTop:"-15px",marginBottom:"10px"}}>This project is done not to replace the original but to provide afresh perspective on the image. Often seeing these images with colour makes historical snapshots seemingly more current in their message. <br /> There is no doubt that colour changes the balance and composition of the viewer's gaze, but it also opens up a wider world into the image.</p>
      </div>


 
</div>



      <div className="aboutContainer">
<h1 id='team'>TEAM:</h1>
<div className="profiles">
  <div className="profile">
    <img src={img1} alt=""/>
    <div className='name'>Creed</div>
    <div className='job'>Colorist</div>
    <div className="media">
      <a href="https://instagram.com/maximus.photo_restoral.zone?igshid=MDI0Mzk1ZWY=" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
      <a href=" https://discord.gg/MAXIMUS#2958" target="_blank" rel="noreferrer"><img src={discord} alt="" /></a>

    </div>

  </div>
  <div className="profile">
    <img src={img2} alt=""/>
    <div className='name'>Theodore</div>
    <div className='job'>Photographer</div>
    <div className="media">
      <a href="https://www.facebook.com/PhotoRestorationRescue" target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
      <a href="https://www.instagram.com/photo_restoration_rescue/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
      <a href="https://www.linkedin.com/in/theodore-photo-restoration-service-melbourne-4a55a2211/" target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
    </div>
  </div>
  <div className="profile">
    <img src={img3} alt=""/>
    <div className='name'>Saira</div>
    <div className='job'>Digital colorist</div>
    <div className="media">
    <a href="https://www.instagram.com/colorizacoeshistoricas1/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
      <img src={reddit} alt="" />
      <a href="https://www.reddit.com/user/Sairinha/" target="_blank" rel="noreferrer"><img src={reddit} alt="" /></a>
    </div>
  </div>
  <div className="profile">
    <img src={img4} alt=""/>
    <div className='name'>Duan</div>
    <div className='job'>Digital colorist</div>
    <div className="media">
    <a href="https://www.facebook.com/vintageincolor" target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
      <a href="https://www.instagram.com/vint.ageincolor/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
      <a href="https://www.tiktok.com/@vint.ageincolor" target="_blank" rel="noreferrer"><img src={tiktok} alt="" /></a>
    </div>
  </div>
  <div className="profile">
    <img src={img5} alt=""/>
    <div className='name'>Mozart</div>
    <div className='job'>Digital colorist</div>
    <div className="media">
    <a href="https://www.instagram.com/mozart.baptista/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
    </div>
  </div>
  <div className="profile">
    <img src={img6} alt=""/>
    <div className='name'>Mochaffaa</div>
    <div className='job'>Programmer / Developer</div>
    <div className="media">
    <a href="https://www.facebook.com/mohssine_mochaffaa" target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
    <a href="https://www.instagram.com/mohssine_mochaffaa/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
      <a href="https://www.tiktok.com/@mohssine_dev" target="_blank" rel="noreferrer"><img src={tiktok} alt="" /></a>
    </div>
  </div>
  <div className="profile">
    <img className='rot' src={img7} alt=""/>
    <div className='name'>Tata</div>
    <div className='job'>Co-founder</div>
    <div className="media">
    <a href="https://www.facebook.com/tahare.aboudamia96" target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
    <a href="https://www.instagram.com/taharaboudamia/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
    <a href="https://twitter.com/geekiphon" target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a>
    </div>
  </div>
</div>
<h1 id='join'>Join:</h1>
<div className="socials">
<a href="https://web.facebook.com/Discoveryincolor" target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
<a href="https://www.instagram.com/discovery_incolor" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
<a href=" https://twitter.com/ColorDiscovery" target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a>
<a href=" https://discord.gg/BVCqajgkWt" target="_blank" rel="noreferrer"><img src={discord} alt="" /></a>
</div>
<h3 className='footer'>©2022 by THE BOY KING LEGACY LLC </h3>

</div>
    </div>
  );
}

export default App;
