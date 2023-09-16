import {observer} from "mobx-react-lite"
import style from './Pagination.module.scss'

interface Props {
  totalPages: number;
  onPageChange: any;
}

// const Pagination = observer(({ totalPages, onPageChange }: Props): JSX.Element => {
//   const pageRange = []
//   for (let i = 1; i <= totalPages; i++) {
//     pageRange.push(i)
//   }
//   return (
//     <div>
//       <ul className={style.pagination__list}>
//         {
//           pageRange.map((page) => (
//             <li key={page} onClick={() => onPageChange(page)}>
//               <button>{page}</button>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// })


const Pagination = observer(({ totalPages, onPageChange }: Props): JSX.Element => {
  const pageRange = []
  for (let i = 1; i <= totalPages; i++) {
    pageRange.push(i)
  }
  return (
    <div className={style.pagination__block}>
      <ul className={style.pagination__list}>
      <button className={style.btn}>Next</button>
        {
          pageRange.map((page) => (
            <li key={page} className={style.item__pagination}>
              <button onClick={() => onPageChange(page)}>{page}</button>
            </li>
          ))
        }
      <button className={style.btn}>Previos</button>
      </ul>
    </div>
  )
})

export default Pagination
