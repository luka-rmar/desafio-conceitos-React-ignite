import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { ToastContainer } from 'react-toastify';

import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"

import './styles/global.scss'


export function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <TaskList />
    </>
  )
}