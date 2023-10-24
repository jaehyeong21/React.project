import React, { useState } from 'react';
import './profil.css';
import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5";

function Profil() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const profiles = [
    {
      name: "Seraphine",
      role: "Support",
      description: "Born in Piltover to Zaunite parents, SerapBorn in Piltover to Zaunite parents, Seraphine can hear the souls of others—the world sings to her, and she sings back. Though these sounds overwhelmed her in her youth, she now draws on them for inspiration, turning the chaos into a symphony",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QoWA6JhEysAP2E27MtPqAnV2w73WgN5ww1WsBZFe_NKcE1_AnF9ny9G30JNcgYVOlhs&usqp=CAU"
    },
    
    {
      name: "Briar",
      role: "Jungle",
      description: "A failed experiment by the Black Rose, Briar's uncontrollable bloodlust required a special pillory to focus her frenzied mind. After years of confinement, this living weapon broke free from her restraints and unleashed herself into the world.",
      image: "https://i.ytimg.com/vi/K9oQDlS-rj0/maxresdefault.jpg"
    },
    {
      name: "Gwen",
      role: "Top",
      description: "A former doll transformed and brought to life by magic, Gwen wields the very tools that once created her. She carries the weight of her maker's love with every step, taking nothing for granted.",
      image: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3539d87b48b7e063/605b9a545a03370f176ce44a/Gwen_Base_Final-optimized.jpg"
    },
    {
      name: "Akali",
      role: "Mid",
      description: "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. ",
      image: "https://i.ytimg.com/vi/rUOWNFg7g00/maxresdefault.jpg"
    },
    {
      name: "Ashe",
      role: "AD",
      description: "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice.  ",
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_17.jpg"
    }
  ];

  const onClick = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    setCurrentIndex(randomNumber);
  }

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? profiles.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % profiles.length);
  };

  return (
    <div className="boxs">
      <div className="box__profils">
        <div className="box__profil">
          <div>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzAxMThfMzQg/MDAxNDg0NzMwNDQxNDI3.14HhWg-gtL8eOjNIYqFohk3XgufI2VqGdX2c8qK4h1Ag.Ot5ZQBPWeNSEC00x313vST77LLDbq7quFthGXl6DvXIg.PNG.ivorystars/%EF%BF%BD%EC%A2%8F%EA%B2%A2%EF%BF%BD%EF%BF%BD-Icon.png?type=w800" alt="이미지" className="img__mini" />
            <img src={profiles[currentIndex].image} alt="이미지" className="img" />
            </div>
          <div className = "box__profil__name">{profiles[currentIndex].name}</div>
          <div className = "box__profil__line">{profiles[currentIndex].role}</div>
          <div className="box__profil__text">{profiles[currentIndex].description}</div>
          <div>
            <IoArrowUndoSharp
              className = "box__profil__icon"
              onClick={handlePrev} />
            <IoArrowRedoSharp
              className = "box__profil__icon"
              onClick={handleNext} />
          </div>
          <div></div>
          <button 
            onClick = {onClick}
            className = "box__profil__button"
          >Surprise Me</button>
        </div>
      </div>
    </div>
  );
}

export default Profil;
