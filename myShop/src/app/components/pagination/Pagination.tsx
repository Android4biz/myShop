import {observer} from "mobx-react-lite"
import store from '../../../store/app/AppStoreProvider'
import style from './Pagination.module.scss'

interface Props {
  totalPages: number;
  onPageChange: any;
}

const Pagination = observer(({ totalPages, onPageChange }: Props): JSX.Element => {
  const pageRange = []
  for (let i = 1; i <= totalPages; i++) {
    pageRange.push(i)
  }

  const handleNext = () => {
    store.nextClick()
  }

  const handlePrevios = () => {
    store.previosClick()
  }

  return (
    <div className={style.pagination__block}>
      <ul className={style.pagination__list}>
        <button className={style.btn} onClick={() => handleNext()}>Next</button>
        {
          pageRange.map((page) => (
            <li key={page} className={style.item__pagination}>
              <button onClick={() => onPageChange(page)} className={style.btn__pagination}>{page}</button>
            </li>
          ))
        }
      <button className={style.btn} onClick={()=> handlePrevios()}>Previos</button>
      </ul>
    </div>
  )
})

export default Pagination
