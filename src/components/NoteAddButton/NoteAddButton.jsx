import add from '../../img/add-button.png'
import styles from './btn.module.css'


export function NoteAddButton({addNoteHandler}) {
  return (
    <>
      <button type="button" className={styles.btn__add} onClick={addNoteHandler}>
        <img src={add} alt="add"></img>
      </button>
    </>
  )
}