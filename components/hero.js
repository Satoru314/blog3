import styles from '@/styles/hero.module.css'
import utils from '@/styles/utils.module.css'
import iruka from '@/public/24850_color.svg'
import Image from 'next/image'
export default function Hero({title, subtitle, imageOn = false }) {
    return (
        <div className={utils.sideBySideCenter}>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {imageOn ? <figure className={styles.imageContainer}> <Image src={iruka} alt="iruka" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"/></figure> : null}
        </div>
        
    )
}