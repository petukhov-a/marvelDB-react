import useMarvelService from '../../services/MarvelService';
import { useState, useEffect } from 'react';

import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import { render } from '@testing-library/react';

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset] = useState(210);

    const {getAllComics, loading, error} = useMarvelService();

    useEffect(() => {
        onRequest(offset);
    }, []);

    const onRequest = (offset) => {
        getAllComics(offset)
            .then(onComicsLoaded);
    }

    const onComicsLoaded = (comicsList) => {
        setComicsList(comicsList);
    }

    function renderItems(arr) {
        const items = arr.map(item => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <li className="comics__item"
                    key={item.id}>
                    <a href="#">
                        <img src={item.thumbnail} style={imgStyle} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}$</div>
                    </a>
                </li>
            );
        });

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        );
    }

    const items = renderItems(comicsList);

    return (
        <div className="comics__list">
            {items}
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;