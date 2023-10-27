import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import style from './Cards.module.scss'
import Pagination from '../pagination/Pagination'
import CardsItem from '../cards-item/CardsItem'
import store from '../../../store/app/AppStoreProvider'
import { shop, shopApi } from '../../api/shop'

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

  const handleClickBasket = (id: number): void => {
    store.countAddIncrement(id)
  }

  const handleClickBasketDecrement = (id: number): void => {
    store.countAddDecrement(id)
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
  console.log(store.datas.map(i => i.count), '<<<')
  return (
    <div className={style.main__cards}>
      <h1 className={style.title}>
        Total Product
      </h1>
      <section className={style.cards__section}>
        { store.flagItem ? store.datas.map((el: shopApi) =>
          <div className={style.cards__block} >
            <div className={style.cards__item} onClick={()=>handleClickItem(el.id)}>
              <img className={style.block__card} key={el.id} src={el.img}/>
              <h5 className={style.title__h5}>{el.category}</h5>
              <h3 className={style.title}>{el.title}</h3>
              <span>$ {el.price}</span>
            </div>
            <div className={style.count__block}>
              <p>количество { el.count } шт. в корзину</p>
              <button className={style.btn} onClick={() => handleClickBasket(el.id)}>+</button>
              <button className={style.btn} onClick={() => handleClickBasketDecrement(el.id)}>-</button>
            </div>
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
