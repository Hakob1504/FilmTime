import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveBtn, changeInputValue } from '../../store/slices/genresSlice'
import { Link } from 'react-router-dom'
import './Logo.css'

function Logo() {
    const { inputValue, isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()

    const logoOnClick = () => {
        window.scrollTo(0, 0)
        dispatch(changeActiveBtn(null))
        if (inputValue.length) {
            dispatch(changeInputValue(''))
        }
    }

    return (
        <Link
            className={`logo ${!isDarkTheme && 'logo_light'}`}
            to={'/'}
            onClick={logoOnClick}
        >FilmTime</Link>
    )
}

export default Logo
