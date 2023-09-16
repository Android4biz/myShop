import Navbar from './components/navbar/Navbar'
import ProductTitle from './components/title/ProductTitle'
import style from './App.module.scss'
import Search from './components/search/Search'
import Cards from './components/cards/Cards'
// import Pagination from './components/pagination/Pagination'
import {observer} from 'mobx-react-lite'
// import store from '../store/app/AppStoreProvider'

const App = observer((): JSX.Element => {
  return (
    <div className={style.app}>
      <Navbar />
      <ProductTitle/>
      <Search/>
      <Cards/>
      {/* <Pagination
        currentPage={currentPage}
				totalPages={PageSize}
				onPageChange={handlePageChange}
      /> */}
    </div>
  )
})

export default App
