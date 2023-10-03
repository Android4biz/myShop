import Navbar from './components/navbar/Navbar'
import style from './App.module.scss'
import Search from './components/search/Search'
import Cards from './components/cards/Cards'
import {observer} from 'mobx-react-lite'
import { Routes, Route } from 'react-router-dom'
import Categories from './components/categories'

const App = observer((): JSX.Element => {
  return (
    <div className={style.app}>
      <Routes>
        <Route path='/*' element={<Navbar/>}></Route>
      </Routes>
      <Search/>
      <Routes>
        <Route path='/products' element={<Cards/>}></Route>
        <Route path='/categories' element={<Categories/>}></Route>
      </Routes>
    </div>
  )
})

export default App
