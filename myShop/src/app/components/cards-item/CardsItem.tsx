import store from '../../../store/app/AppStoreProvider'

interface cardItemType {
  id: number
  key: number
  value: string
}

const CardsItem = ({ value, id, key }: cardItemType) => {

  return (
    <>
      {id && key ? 'str' : value}
    </>
  )
}

export default CardsItem
