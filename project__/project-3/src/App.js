import './App.css';
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiLogoReact } from "react-icons/bi";
import {useState} from "react"; 

function App() {
  const [isopen, setIsopen] = useState(false);

  function OnMenu(){
    setIsopen(!isopen);
  }
  
  function Close(){
    setIsopen(false);
  }

  return (
    <div className = "body">
      <div className = {`body__sidebar ${isopen ? 'open' : ''}`}>
        <div className = "body__sidebar__title">
          <div className = "body__sidebar__title__text">Coding Addict</div>
          <div>
            <AiOutlineClose
              className = "body__sidebar__title__icon"
              onClick={() => Close()}/>
          </div>
        </div>
        <div className = "body__sidebar__box">
          <div className = "body__sidebar__box__menu">Home</div>
          <div className = "body__sidebar__box__menu">About</div>
          <div className = "body__sidebar__box__menu">Projects</div>
          <div className = "body__sidebar__box__menu">Contact</div>
        </div>
        <div className = "body__sidebar__link">
          <a 
            href = "https://www.facebook.com/?locale=ko_KR"
            className = "body__sidebar__link__icon"><BsFacebook/>
          </a>
          <a 
            href = "https://github.com/jaehyeong21"
            className = "body__sidebar__link__icon"><AiFillGithub/>
          </a>
          <a 
            href = "https://react.dev/"
            className = "body__sidebar__link__icon"><BiLogoReact/></a>
          <a
            href = "https://www.instagram.com/"
            className = "body__sidebar__link__icon"><AiOutlineInstagram/></a>
        </div>
      </div>
      <FiAlignJustify
        className = "body__menu"
        onClick = {() => OnMenu()}
      />
    </div>
  );
}

export default App;
