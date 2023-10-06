import React from 'react'

import './FilmCard.css'
import { NavLink } from 'react-router-dom'
import { imgUrl } from '../../api/api'
import { useSelector } from 'react-redux'


function FilmCard({ film }) {
    const { isDarkTheme } = useSelector(state => state.genresData)

    return (
        <NavLink to={`/films/${film.id}`} className={`film_div ${!isDarkTheme && 'film_div_light'}`}>
            <img src={imgUrl + film.poster_path} alt="" />
            <h4>{film.title.length < 10 ? film.title : film.title.slice(0, 10) + '...'}</h4>
        </NavLink>
    )
}

export default FilmCard
