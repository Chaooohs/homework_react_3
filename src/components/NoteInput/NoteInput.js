import { useState } from 'react';

import Item from '../UI/Item'
import './NoteInput.css'
import styles from '../NoteAddButton/btn.module.css'
import save from '../../img/save-button.png'

const el = (selector) => document.querySelector(selector);


function NoteInput({ onSetInput }) {

  const [inputNote, setNote] = useState('')

  const changeInputHandler = (e) => {
    if (e.target.value === '') return
    setNote(e.target.value)
  }

  const setInputHandler = () => {
    if (inputNote === '') {
      el('.enter').classList.remove('open')
      return
    }
    const input = {
      id: Math.random().toString(),
      note: inputNote,
      completed: false
    }
    onSetInput(input)
    el('.enter').classList.remove('open')
    setNote('')
  }

  return (
    <>
      <div className='enter__wrap'>
        <Item className="enter">
          <input type="text" className="enter__input" placeholder='shopping list' value={inputNote} onChange={changeInputHandler} onKeyUpCapture={(e) => e.code === 'Enter' || e.code === 'NumpadEnter' ? setInputHandler() : null}></input>
          <button type="button" className={styles.button} onClick={setInputHandler}>
            <img src={save} alt="save" className='enter__icon'></img>
          </button>
        </Item>
      </div>
    </>
  )
}

export default NoteInput