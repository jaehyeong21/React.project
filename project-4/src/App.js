import React, { useState } from 'react';
import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [edit, setEdit] = useState(Array(toDos.length).fill(false));
  const [completeOnchange, setCompleteOnchange] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onComplete__change = (event) => setCompleteOnchange(event.target.value);

  const onClick = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
    const newEdit = [...edit];
    newEdit.splice(index, 1);
    setEdit(newEdit);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
    setEdit((currentEdit) => [...currentEdit, false]); 
  }

  const onEdit = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index]; 
    setEdit(newEdit);
  }

  const onComplete = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index]; 
    toDos[index] = completeOnchange;
    setToDos(toDos);
    setEdit(newEdit);
  }


  return (
    <div className = "Todo">
      <div className = "Todo__header">
        <h1>My To Do_list {toDos.length}</h1>
        <form
          className = "Todo__header__submit" 
          onSubmit={onSubmit}
        >
          <input
            className = "Todo__header__submit__add"
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write your to do..."
          />
          <button
            className = "Todo__header__submit__button">
              Add To Do
          </button>
        </form>
      </div>
        {toDos.map((item, index) => (
          <div 
          key={index}>
            <div className = "Todo__list__box">
              <FontAwesomeIcon 
                icon = {faCircle}
                className = "Todo__list__box__icona" />
              <span
                className = "Todo__list__box__text"
                style = {{display : edit[index] ? "none" : "block"}}>
                {`${item}`}
              </span>
              <input
                type="text"
                onChange = {onComplete__change}
                style={{ display: edit[index] ? "block" : "none" }}
              />
              <div className = "Todo__list__box__icons">
                <div className = "Todo__list__box__icon">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => onClick(index)}
                    >삭제
                  </FontAwesomeIcon>
                </div>
                <div className = "Todo__list__box__icon">
                  <FontAwesomeIcon
                    icon={faPencil}
                    onClick={() => onEdit(index)}
                    style = {{display : edit[index] ? "none" : "block"}}
                    >수정
                  </FontAwesomeIcon>
                </div>
                <div className = "Todo__list__box__icon">
                  <div className = "Todo__list__box__icon__check">
                  <FontAwesomeIcon icon={faCheck}
                    onClick={() => onComplete(index)}
                    style = {{display : edit[index] ? "block" : "none"}}
                    >완료
                  </FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
          </div>
        ))}
    </div>
  );
}

export default App;