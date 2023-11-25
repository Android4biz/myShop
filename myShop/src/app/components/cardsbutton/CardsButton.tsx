import style from '../../components/cards/Cards.module.scss'
import store from '../../../store/app/AppStoreProvider'

interface tButton {
  id: number,
  count: number
}

function CardsButton({ id }: tButton): JSX.Element {

  return (
    <div className={style.count__block}>
      <button className={style.btn} onClick={() => store.addClick(id)} key={id}>Add</button>
    </div>
  )
}

export default CardsButton
