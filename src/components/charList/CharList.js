import { Component } from 'react/cjs/react.production.min';
import Spinner from '../spinner/Spinner';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
    state = {
        chars: [],
        loading: true
    }

    marvelService = new MarvelService();

    componentDidMount = () => {
        this.charsUpdate();
    }

    onCharsLoaded = (chars) => {
        this.setState({
            chars,
            loading: false
        });
    }

    charsUpdate = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharsLoaded)
    }

    render() {
        const {chars, loading} = this.state;
        const spinner = loading ? <Spinner /> : null;

        const elements = chars.map(char => {
            return (
                <li className="char__item">
                    <img src={char.thumbnail} alt="char"/>
                    <div className="char__name">{char.name}</div>
                </li>
            );
        });

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {spinner}
                    {elements}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

export default CharList;