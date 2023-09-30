import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import style from './Cards.module.scss'
import Pagination from '../pagination/Pagination'
import CardsItem from '../cards-item/CardsItem'
import store from '../../../store/app/AppStoreProvider'
interface dataProducts  {
  title: string;
  url?: string;
  id: number;
}

const Cards = observer((): JSX.Element => {
  const [ num, setNum ] = useState(1)

  const handlePageChange = (page: number): void => {
    store.changePage(page)
  }

  const handleClickItem = (id: number) => {
    store.clickItemCard(id)
    setNum(id)
  }

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const req: Response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      const res: [] =  await req.json()
      const firstPageIndex: number = (store.page - 1) * store.totalPage
      const lastPageIndex: number = firstPageIndex + Math.floor(res.length / store.totalPage);
      const resSlice: dataProducts[] = res.slice(firstPageIndex, lastPageIndex);
      store.todos(resSlice)
      store.fullTodos(res)
    }
    fetchData()
  }, [store.page])

  return (
    <div className={style.main__cards}>
      <h1 className={style.title}>
        Total Product
      </h1>
      <section className={style.cards__section}>
        { store.flagItem ? store.datas.map((el: dataProducts) =>
          <div className={style.cards__block} >
            <div className={style.cards__item} onClick={()=>handleClickItem(el.id)}>
              <img className={style.block__card} key={el.id} src={el.url}/>
              <h3 className={style.title}>{el.title}</h3>
            </div>
          </div>
          ) : store.datas.map((i: dataProducts) => num === i.id && <div>
            <CardsItem
              key={num}
              id={i.id}
              value={i.title}
              url={i.url}
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
