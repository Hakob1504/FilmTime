import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilmById, fetchVideo } from '../../store/slices/filmsSlice'
import { imgUrl } from '../../api/api'
import { BsBackspace } from 'react-icons/bs'
import './Film.css'

function Film({ iframeRef }) {
    const { film } = useSelector(state => state.filmsData)
    const { lang, isDarkTheme } = useSelector(state => state.genresData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchFilmById({ id, lang }))
        dispatch(fetchVideo({ id, iframeRef, lang }))
    }, [lang, id])

    return (
        <div className={`film_page ${!isDarkTheme && 'film_light'}`}>
            <button onClick={() => navigate(`/`)} className={`back_btn ${!isDarkTheme && 'back_btn_light'}`}>{BsBackspace()}</button>
            <div className={`film ${!isDarkTheme && 'film_light'}`}>
                <img className='film_img' src={imgUrl + film.poster_path} alt="" />
                <div className="film_info">
                    <div className="info">
                        <h2>{film.title}</h2>
                        <h3>Release date: {film.release_date}</h3>
                        <h3>Rating: {film.vote_average}</h3>
                        <h3>Votes: {film.vote_count}</h3>
                        <p><h3>About: </h3>{film.overview}</p>
                    </div>
                    <iframe
                        ref={iframeRef}
                        frameBorder="1">

                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Film
