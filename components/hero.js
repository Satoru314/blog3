import styles from '@/styles/hero.module.css'
import utils from '@/styles/utils.module.css'
export default function Hero({title, subtitle, imageOn = false }) {
    return (
        <div className={utils.sideBySideCenter}>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {imageOn ?  <figure> [画像] </figure> : <figure> [画像はありません] </figure>}
        </div>
        
    )
}