import styles from './index.module.scss'

const Box = ({children, status}) => {
    return (
        <div className={`${styles.box} ${styles[status]}`}>{children}</div>
    )
}

export default Box
