import Navbar from './components/navbar/Navbar'
import ProductTitle from './components/title/ProductTitle'
import style from './App.module.scss'
import Search from './components/search/Search'
import Cards from './components/cards/Cards'
import {observer} from 'mobx-react-lite'
// import store from '../store/app/AppStoreProvider'

const App = observer((): JSX.Element => {
  return (
    <div className={style.app}>
      <Navbar />
      <ProductTitle/>
      <Search/>
      <Cards/>
    </div>
  )
})

export default App
