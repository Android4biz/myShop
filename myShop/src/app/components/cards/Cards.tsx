import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import style from './Cards.module.scss'
import Pagination from '../pagination/Pagination'
import CardsItem from '../cards-item/CardsItem'
import store from '../../../store/app/AppStoreProvider'
import { shop } from '../../api/shop'

interface dataProducts  {
  title: string;
  img?: string;
  id: number;
  category: string;
  price: number;
  count: number
}

const Cards = observer((): JSX.Element => {
  const [ num, setNum ] = useState(1)
  // const [ cnt, setCnt ] = useState(1)

  const handlePageChange = (page: number): void => {
    store.changePage(page)
    store.paginationTgl(page)
  }

  const handleClickItem = (id: number): void => {
    store.clickItemCard(id)
    setNum(id)
  }

  const handleClickBasket = (id: number): void => {
    store.countAdd(id)
  }

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const firstPageIndex: number = (store.page - 1) * store.totalPage
      const lastPageIndex: number = firstPageIndex + Math.floor(shop.length / store.totalPage)
      const resSlice: dataProducts[] = shop.slice(firstPageIndex, lastPageIndex);
      store.todos(resSlice)
      store.fullTodos(shop)
    }
    fetchData()
  }, [store.page])

  // useEffect(() => {
  //   store.basketCount2 = Number(localStorage.getItem('datas'))
  // }, [store.basketCount2])

  return (
    <div className={style.main__cards}>
      <h1 className={style.title}>
        Total Product
      </h1>
      <section className={style.cards__section}>
        { store.flagItem ? store.datas.map((el: dataProducts) =>
          <div className={style.cards__block} >
            <div className={style.cards__item} onClick={()=>handleClickItem(el.id)}>
              <img className={style.block__card} key={el.id} src={el.img}/>
              <h5 className={style.title__h5}>{el.category}</h5>
              <h3 className={style.title}>{el.title}</h3>
              <span>$ {el.price}</span>
            </div>
            <div className={style.count__block}>
              <p>количество { el.count } шт. в корзину</p>
              <button className={style.btn} onClick={() => handleClickBasket(el.id)}>Купить</button>
            </div>
          </div>
          ) : store.datas.map((i: dataProducts) => num === i.id && <div>
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
