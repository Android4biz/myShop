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

  const handleNext = (): void => {
    store.nextClick()
    onPageChange(store.page)
  }

  const handlePrevios = (): void => {
    store.previosClick()
    onPageChange(store.page)
  }

  return (
    <div className={style.pagination__block}>
      <ul className={style.pagination__list}>
        <button className={style.btn} onClick={() => handleNext()}>Next</button>
        {
          pageRange.map((page) => (
            <li key={page} className={style.item__pagination}>
              <button onClick={() => onPageChange(page)} className={store.tglpage && page === store.pageNum ? style.active : style.btn__pagination}>{page}</button>
            </li>
          ))
        }
      <button className={style.btn} onClick={()=> handlePrevios()}>Previos</button>
      </ul>
    </div>
  )
})

export default Pagination
