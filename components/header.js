import Logo from './logo';
import Nav from './nav';
import utils from '@/styles/utils.module.css'
export default function Header() {
    return (
        <header>
            <div className={utils.spaceBetween}>
            <Logo boxOn/>
            <Nav/>
            </div>
        </header>
    )
}