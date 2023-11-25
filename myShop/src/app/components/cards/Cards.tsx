import {observer} from 'mobx-react-lite'
import {useEffect,useState} from 'react'
import store from '../../../store/app/AppStoreProvider'
import {shop,shopApi} from '../../api/shop'
import CardsItem from '../cards-item/CardsItem'
import CountCart from '../countcart/CountCart'
import Pagination from '../pagination/Pagination'
import style from './Cards.module.scss'

const Cards = observer((): JSX.Element => {
  const [ num, setNum ] = useState(1)

  const handlePageChange = (page: number): void => {
    store.changePage(page)
    store.paginationTgl(page)
  }

  const handleClickItem = (id: number): void => {
    store.clickItemCard(id)
    setNum(id)
  }
  
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const firstPageIndex: number = (store.page - 1) * store.totalPage
      const lastPageIndex: number = firstPageIndex + Math.floor(shop.length / store.totalPage)
      const resSlice: shopApi[] = shop.slice(firstPageIndex, lastPageIndex);
      store.todos(resSlice)
      store.fullTodos(shop)
    }
    fetchData()
  }, [store.page])
  // console.log(store.datas, 'datas <<<')
  return (
    <div className={style.main__cards}>
      <h1 className={style.title}>
        Total Product
      </h1>
      <section className={style.cards__section}>
        { store.flagItem ? store.datas.map((el: shopApi) =>
          <div className={style.cards__block} key={el.id}>
            <div className={style.cards__item} onClick={()=>handleClickItem(el.id)}>
              <img className={style.block__card} key={el.id} src={el.img}/>
              <h5 className={style.title__h5}>{el.category}</h5>
              <h3 className={style.title}>{el.title}</h3>
              <span>$ {el.price}</span>
            </div>
              <CountCart
                count={el.count}
                id={el.id}
                key={el.id}
              />
          </div>
          ) : store.datas.map((i: shopApi) => num === i.id && <div>
            <CardsItem
              key={num}
              id={i.id}
              value={i.title}
              url={i.img}
              clickBack={()=>handleClickItem(i.id)}
            /> 
          </div>)  
        }
      </section>
      <div className={style.pagination__main}>
        <Pagination
          totalPages={store.totalPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
})

export default Cards
