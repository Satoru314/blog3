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
            {imageOn ? <figure className={styles.imageContainer} > 
                <Image src={iruka} alt="iruka" 
                    fill={true}/>
            </figure> : null}
            {imageOn ? <figure className={styles.imageContainer} > 
                <Image src={iruka} alt="iruka" 
                    fill={true}
                    style={{
                        filter: 'grayscale(50%)', // グレースケールにする例
                    }}/>
            </figure> : null}
            {imageOn ? <figure className={styles.imageContainer} > 
                <Image src={iruka} alt="iruka" 
                    fill={true}
                    style={{
                        filter: 'grayscale(75%)', // グレースケールにする例
                    }}/>
            </figure> : null}
            {imageOn ? <figure className={styles.imageContainer} > 
                <Image src={iruka} alt="iruka" 
                    fill={true}
                    style={{
                        filter: 'grayscale(100%)', // グレースケールにする例
                    }}/>
            </figure> : null}
        </div>
        
    )
}