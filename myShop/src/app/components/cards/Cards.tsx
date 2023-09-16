import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import style from './Cards.module.scss'
import Pagination from '../pagination/Pagination'
import store from '../../../store/app/AppStoreProvider'

interface dataProducts  {
  title: string;
  url?: string;
  id: number;
}

const pageSize: number = 5

const Cards = observer((): JSX.Element => {
  const [data, setData] = useState([])
  const [numb, setNumb] = useState<number>(1)
  const [fullData, setFullData] = useState([])
  // console.log(fullData, '<<<<<')
  const handlePageChange = (numb: number): void => {
    setNumb(numb)
  }
  console.log(numb, 'numb')
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const req: Response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      const res: [] =  await req.json()
      const firstPageIndex = (numb - 1) * pageSize
      const lastPageIndex = firstPageIndex + Math.floor(res.length / pageSize);
      // console.log(lastPageIndex, 'firstPageIndex')
      const resSlice = res.slice(firstPageIndex, lastPageIndex);
      // console.log(resSlice, 'res')
      setData(resSlice)
      setFullData(res)
    }
    fetchData()
  }, [numb])
  console.log(data, 'fullData')
  return (
    <div className={style.main__cards}>
      <h1 className={style.title}>
        Total Product
      </h1>
      <section className={style.cards__section}>
        {data.map((el: dataProducts) =>
          <div className={style.cards__block}>
            <div className={style.cards__item}>
              <img className={style.block__card} key={el.id} src={el.url}/>
              <h3 className={style.title}>{el.title}</h3>
            </div>
          </div>
        )}
      </section>
      <div className={style.pagination__main}>
        <Pagination
          totalPages={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
})

export default Cards
