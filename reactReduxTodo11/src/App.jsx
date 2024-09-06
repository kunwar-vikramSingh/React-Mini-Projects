//notes- before Redux few important topics are - Store,useSelector,useDispatcher,reducers.
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 class="text-black p-4 text-3xl font-bold ">To-Do with the help of Redux</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
