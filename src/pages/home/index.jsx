import styles from './index.module.scss'
import text from './text.json'
import Box from '../../components/box'
import {useState} from 'react'

const Home = () => {
    const [columns, setColumns] = useState([1, 2, 3])
    const [rows, setRows] = useState([1, 2, 3])
    const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const chartStyle = {
        width: `${rows.length * 80}px`,
        height: `${columns.length * 80}px`
    }
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return (
        <section className={styles.home}>
            <div className={styles.content}>
                <div className={styles.vertical_row}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <div className={styles.chart} style={chartStyle}>
                    <div className={styles.titles}>
                        <span>{text.low_risk}</span>
                        <span>{text.low_risk}</span>
                        <span>{text.high_risk}</span>
                    </div>
                    <div className={styles.row}>
                        {boxes.map((item, index) => (
                            <Box status="no" key={item}>{item}</Box>
                        ))}
                    </div>
                </div>
                <div className={styles.horizontal_row}>123</div>
            </div>
        </section>
    )
}

export default Home
