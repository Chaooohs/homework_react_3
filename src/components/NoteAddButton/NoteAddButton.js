import add from '../../img/add-button.png'
import styles from './btn.module.css'
const el = (selector) => document.querySelector(selector);

export function NoteAddButton() {

  const addNoteHandler = () => {
    el('.enter').classList.add('open')
  }

  return (
    <button type="button" className={styles.btn__add} onClick={addNoteHandler}>
      <img src={add} alt="add"></img>
    </button>
  )
}