import style from './ProductTitle.module.scss'

const ProductTitle = () => {
    return (
        <div className={style.block__title}>
            <h1 className={style.title}>Products</h1>
            <p className={style.title__text}>
                We display products based on the latest products we have,
                if you want to see our old products please enter the name of the
                item
            </p>
        </div>
    )
}

export default ProductTitle