import {useLocalStorage} from './hooks/useLocalStorage'

import { NoteAddButton } from "./components/NoteAddButton/NoteAddButton";
import NoteInput from "./components/NoteInput/NoteInput";
import NoteList from "./components/NoteList/NoteList";

const el = (selector) => document.querySelector(selector);
const all = (selectorAll) => document.querySelectorAll(selectorAll);

function App() {

  const [item, setItem] = useLocalStorage([], 'local')

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

  return (
    <>
      <NoteAddButton></NoteAddButton>
      <NoteInput onSetInput={setInputHandler}></NoteInput>
      <NoteList item={item} onDoneBtn={doneBtnHandler} onRemoveBtn={removeBtnHandler} onSetItem={setItem}></NoteList>
    </>
  );
};

export default App