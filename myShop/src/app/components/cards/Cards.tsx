import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import style from './Cards.module.scss'

interface dataProducts  {
  title: string;
  url?: string;
  id: number;
}

const Cards = observer((): JSX.Element => {
  const [data, setData] = useState<[]>([])

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const req: Response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      const res: [] =  await req.json()
      setData(res)
    }
    fetchData()
  }, [])
  // console.log(data)
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
    </div>
  )
})

export default Cards
