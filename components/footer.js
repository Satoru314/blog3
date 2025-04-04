import Logo from './logo'
import styles from '@/styles/footer.module.css'
import utils from '@/styles/utils.module.css'
export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={`${styles.flexContainer} ${utils.spaceBetween}`}>
                <Logo />
                [social]
            </div>
            
        </footer>
    )
}