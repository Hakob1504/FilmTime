import Nav from './Nav/Nav'
import Form from './Form/Form'
import Logo from '../Logo/Logo'
import Language from './Language/Language'
import Theme from './Theme/Theme'
import './Header.css'
import { useSelector } from 'react-redux'

function Header({ iframeRef }) {
    const { isDarkTheme } = useSelector(state => state.genresData)

    return (
        <header className={!isDarkTheme && 'header_light'}>
            <div className="header_part_1">
                <Logo />
                <Form iframeRef={iframeRef} />
                <div className="actions_div">
                    <Language />
                    <Theme />
                </div>
            </div>
            <div className="header_part_2">
                <Nav />
            </div>
        </header>
    )
}

export default Header
