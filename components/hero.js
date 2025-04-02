import styles from '@/styles/hero.module.css'
export default function Hero({title, subtitle, imageOn = false }) {
    const description = "デヤンス"
    return (
        <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <p>{description}</p>
            {imageOn ?  <figure> [画像] </figure> : <figure> [画像はありません] </figure>}
        </div>
    )
}