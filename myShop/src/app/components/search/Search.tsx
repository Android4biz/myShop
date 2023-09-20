import {observer} from 'mobx-react-lite'
import { useState } from 'react'
import store from '../../../store/app/AppStoreProvider'
import style from './Search.module.scss'

const Search = observer(() => {
  const [value, setValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <div className={style.block__input}>
      <input className={style.input} placeholder='Search property' onChange={handleChange}/>
      <button className={style.btn} onClick={()=>store.filterProduct(value)}>Find Now</button>
      <button className={style.btn__filter}>Filter</button>
    </div>
  )
})

export default Search
