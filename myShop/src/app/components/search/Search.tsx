import {observer} from 'mobx-react-lite'
import style from './Search.module.scss'

const Search = observer(() => {
    return (
        <div className={style.block__input}>
            <input className={style.input} placeholder='Search property'/>
        </div>
    )
})

export default Search