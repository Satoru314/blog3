import Logo from './logo'
import styles from '@/styles/footer.module.css'
import utils from '@/styles/utils.module.css'
import Container from"@/components/container.js";
export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={`${styles.flexContainer} ${utils.spaceBetween}`}>
                    <Logo />
                    [social]
                </div>
            </Container>
        </footer>
    )
}