import store from '../../../store/app/AppStoreProvider'
import { shop } from '../../api/shop'
import style from './Categories.module.scss'
import {observer} from 'mobx-react-lite'

interface categoryArray {
  category: string,
  title: string,
  price: number,
  id: number,
  img: string
}

const Categories = observer((): JSX.Element => {

  let cat = shop.map(item => item.category)
  let catSet = new Set(cat)

  const handleClick = (item: string): void => {
    store.filterTag(item)
    store.fullTodos(shop)
    store.toggleFn()
    store.filterCategory(item)
  }

  return (
    <div className={style.category__block}>
      <div className={style.category__item}>
        { Array.from(catSet).map(item => <ul>
          <li className={style.cat__item}><button onClick={() => handleClick(item)}>{ item }</button></li>
        </ul>) }
      </div>
      <div className={style.products}>
        { store.toggleCategory ?
          store.arrCategory.map((el: categoryArray) =>
            <div className={style.block__product}>
              <div className={style.product__item}>
                <img className={style.img__categories} key={el.id} src={el.img}/>
                <h5 >{el.category}</h5>
                <h3 >{el.title}</h3>
                <span>$ {el.price}</span>
              </div>
            </div>)
        : false }
      </div>
    </div>
  )
})

export default Categories
