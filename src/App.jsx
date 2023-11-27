import { useLocalStorage } from './hooks/useLocalStorage'
import { useRef } from 'react'

import { NoteAddButton } from "./components/NoteAddButton/NoteAddButton"
import NoteInput from "./components/NoteInput/NoteInput"
import NoteList from "./components/NoteList/NoteList"

const el = (selector) => document.querySelector(selector);


function App() {
  const [item, setItem] = useLocalStorage([], 'local')
  const ref = useRef(null)

  const setInputHandler = (input) => {
    setItem((prevItem) => {
      return [input, ...prevItem]
    })
  }

  const doneBtnHandler = (id) => {
    setItem(item.filter((item) => {
      if (id === item.id) {
        item.completed = !item.completed
      }
      return item
    }))
  }

  const removeBtnHandler = (id) => {
    setItem(item.filter((item) => id !== item.id))
  }

  // localStorage.setItem('key', JSON.stringify(item))

  const addNoteHandler = () => {
    el('.enter').classList.add('open')
    ref.current.focus()
  }

  return (
    <div className='wrap'>
      <NoteAddButton addNoteHandler={addNoteHandler}></NoteAddButton>
      <NoteInput onSetInput={setInputHandler} ref={ref}></NoteInput>
      <NoteList item={item} onDoneBtn={doneBtnHandler} onRemoveBtn={removeBtnHandler}
        onSetItem={setItem}></NoteList>
    </div>
  );
};

export default App 