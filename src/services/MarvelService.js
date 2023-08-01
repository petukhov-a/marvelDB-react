import { useHttp  } from "../hooks/hook.http";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'e6a3490d1a1b41479a28f4e8231bd43f';
    const _baseOffset = 210;


    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?apikey=${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&apikey=${_apiKey}`);
        return res.data.results.map(_transformComic);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?apikey=${_apiKey}`);
        return _transformComic(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.comics.items
        }
    }

    const _transformComic = (comic) => {
        return {
            id: comic.id,
            title: comic.title,
            description: comic.description ? comic.description : 'There is no description',
            pageCount: comic.pageCount ? `${comic.pageCount} p.` : 'No information about the number of pages',
            price: comic.prices[0].price ? `${comic.prices[0].price}$` : 'not available',
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            language: comic.textObjects.language || 'en-us'
        }
    }

    return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComic}
}

export default useMarvelService;