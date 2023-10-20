import './NoteList.css'
import '../NoteInput/NoteInput.css'
import Item from '../UI/Item'
import done from '../../img/done-button.png'
import resize from '../../img/edit-button.png'
import del from '../../img/delete-button.png'
import save from '../../img/save-button-item.png'
import styles from '../NoteAddButton/btn.module.css'
import { useState } from 'react'


function NoteList({ item, onDoneBtn, onRemoveBtn, onSetItem }) {

  const [edit, setEdit] = useState('')
  const [value, setValue] = useState('')

  const editBtnHandler = (id, note) => {
    setEdit(id)
    setValue(note)
  }

  const saveBtnHandler = (id) => {
    let newItem = [...item].map((item) => {
      if (item.id === id) {
        item.note = value
      }
      return item
    })
    onSetItem(newItem)
    setEdit('')
  }

  return (
    <div className="list__wrap">
      {
        item.map((item) => (
          <Item className="list__item" key={item.id}>
            {
              edit === item.id ?
                <>
                  <input className='enter__input' value={value} onChange={(e) => setValue(e.target.value)}></input>
                  <button type="button" className={styles.btn__list} onClick={() => saveBtnHandler(item.id)}>
                    <img src={save} alt="save"></img>
                  </button>
                </>
                :
                <>
                  <div className={`list__text ${item.completed ? "completed" : ''}`}>{item.note}</div>
                  <div className='list__buttons'>
                    <button type="button" className={styles.btn__list} onClick={() => onRemoveBtn(item.id)}>
                      <img src={del} alt="del"></img>
                    </button>
                    <button type="button" className={styles.btn__list} onClick={() => onDoneBtn(item.id)}>
                      <img src={done} alt="done"></img>
                    </button>
                    <button type="button" className={styles.btn__list} onClick={() => editBtnHandler(item.id, item.note)}>
                      <img src={resize} alt="edit"></img>
                    </button>
                  </div>
                </>
            }
          </Item>
        )
        )}
    </div >
  )
}

export default NoteList