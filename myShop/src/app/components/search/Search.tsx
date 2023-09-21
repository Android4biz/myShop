import {observer} from 'mobx-react-lite'
import store from '../../../store/app/AppStoreProvider'
import style from './Search.module.scss'
import { useState } from 'react'

const Search = observer(() => {

  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  // const filteredProducts = (value: string) => {
  //   if(value) {
  //     store.datas.filter((item: any) => item.title === value)
  //   }
  //   store.datas
  // }

  // onClick={()=>filteredProducts(value)}
  return (
    <div className={style.block__input}>
      <input
        className={style.input}
        placeholder='Search property'
        onChange={handleChange}
        value={value}
      />
      <button
        className={style.btn}
        onClick={()=>store.filterProduct(value)}
      >Find Now</button>
      <button
        className={style.btn__filter}
      >Filter</button>
    </div>
  )
})

export default Search
