import Navbar from './components/navbar/Navbar'
import ProductTitle from './components/title/ProductTitle'
import style from './App.module.scss'
import Search from './components/search/Search'
import Cards from './components/cards/Cards'
import {observer} from 'mobx-react-lite'
import { Routes, Route } from 'react-router-dom'

const App = observer((): JSX.Element => {
  return (
    <div className={style.app}>
      <Routes>
        <Route path='/*' element={<Navbar/>}></Route>
      </Routes>
      <Search/>
      <ProductTitle/>
      <Routes>
        <Route path='/products' element={<Cards/>}></Route>
      </Routes>
    </div>
  )
})

export default App
