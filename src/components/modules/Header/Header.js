import './header.scss';
import { ReactComponent as IconGithub } from "../../../assets/images/icons/icon_github.svg";

function Header() {
    return (
        <header className="header">
            <a href="/" className="btn-home">
                <span className="" aria-hidden="true">SHIN</span>
                <span className="sr-only">홈으로 이동</span>
            </a>
            <a href="#works" className="btn-menu btn-works">Works</a>
            <a href="#contact" className="btn-menu btn-contact">Contact</a>
            <a href="https://github.com/ian-shinlee/portfolio" target="_blank" rel="noopener noreferrer" className="btn-menu btn-git">
                <span className="sr-only">깃허브로 이동</span>
                <IconGithub />
            </a>
        </header>
    );
}

export default Header;