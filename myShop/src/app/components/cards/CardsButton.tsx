import style from './Cards.module.scss'
import store from '../../../store/app/AppStoreProvider'

interface tButton {
  id: number,
  count: number
}

function CardsButton({ id }: tButton): JSX.Element {
  // console.log(store.countAdd, 'countAdd <<<')
  // const handleClick = (id: number): void => {
  //   store.addClick(id)
  //   if(store.countAdd > 0) {
  //     store.tgladd = true
  //   }
  // }
  return (
    <div className={style.count__block}>
      <button className={style.btn} onClick={() => store.addClick(id)} key={id}>Add</button>
    </div>
  )
}

export default CardsButton