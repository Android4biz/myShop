import store from '../../../store/app/AppStoreProvider'
import CardsButton from '../cardsbutton/CardsButton'
import style from '../../components/cards/Cards.module.scss'

interface countCart {
  id: number,
  count: number,
}

function CountCart({ id, count }: countCart) {
  
  const handleClickBasket = (id: number): void => {
    store.countAddIncrement(id)
  }

  const handleClickBasketDecrement = (id: number): void => {
    store.countAddDecrement(id)
  }

  return (
    <>
      {count > 0 ?
        <div className={style.count__block}>
          <p>количество { count } шт. в корзине</p>
          <button className={style.btn} onClick={() => handleClickBasket(id)}>+</button>
          <button className={style.btn} onClick={() => handleClickBasketDecrement(id)}>-</button>
        </div>
        : <CardsButton id={id} count={count}/>
      }
    </>
  )
}

export default CountCart
