import "./App.css";

//구조분해 할당 
function App({name, job, img, cardColor}) {
  return(
    <div>
      <div className = "card" style={{backgroundColor:cardColor}}>
        <div className = "card__img">
          <img src = {img} alt="avatar"></img>
        </div>
        <div className = "card__box">
          <h3>{name}</h3>
          <div className = "card__box__div">
            <div className = "font__mini">Likelion BUFS</div>
            <div className = "font__midle">{job}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

