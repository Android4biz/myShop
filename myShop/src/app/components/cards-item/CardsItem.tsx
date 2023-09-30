import style from './CardsItem.module.scss'

interface cardItemType {
  id: number
  key: number
  value: string
  url?: string
  clickBack?: any
}

const CardsItem = ({ value, url, key, clickBack }: cardItemType) => {

  return (
    <>
      <img className={style.img__card} key={key} src={url} onClick={clickBack}/>
      { value }
    </>
  )
}

export default CardsItem
