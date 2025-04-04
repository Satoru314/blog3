import Logo from './logo';
import Nav from './nav';
import utils from '@/styles/utils.module.css'
import Container from "@/components/container.js";
export default function Header() {
    return (
        <header>
            <Container large>
                <div className={utils.spaceBetween}>
                    <Logo boxOn/>
                    <Nav/>
                </div>
            </Container>
        </header>
    )
}