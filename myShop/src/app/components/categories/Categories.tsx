import store from '../../../store/app/AppStoreProvider'
import { shop } from '../../api/shop'
import { useState } from 'react'
import style from './Categories.module.scss'

function Categories(): JSX.Element {
  const [ flag, setFlag ] = useState(false)
  let cat = shop.map(item => item.category)
  console.log(cat, 'cat<-')
  let catSet = new Set(cat)

  const handleClick = (item: string) => {
    store.filterTag(item)
    setFlag(!flag)
  }

  return (
    <div className={style.category__block}>
      { Array.from(catSet).map(item => <ul>
        <li className={style.cat__item}><button onClick={() => handleClick(item)}>{ item }</button></li>
      </ul>) }
      <div>
        { flag ?
        store.fullDatas.map((el) =>
          <div className={style.cards__block} >
            <div className={style.cards__item}>
              <img className={style.block__card} key={el.id} src={el.img}/>
              <h5 className={style.title__h5}>{el.category}</h5>
              <h3 className={style.title}>{el.title}</h3>
              <span>$ {el.price}</span>
            </div>
          </div>)
        : '' }
      </div>
    </div>
  )
}

export default Categories
