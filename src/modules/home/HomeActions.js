
import NewsService from '../../services/news/NewsService'
import {
    UPDATE_NEWS,
    IS_FETCHING_NEWS
} from './HomeTypes'

export const updateNews = (NEWS) => {
    return {
        type: UPDATE_NEWS,
        payload: NEWS,
    }
}

export const isFetchingNews = (isFetching) => ({
    type: IS_FETCHING_NEWS,
    payload: isFetching,
})

export const loadNews = () => {
    return async (dispatch) => {
        dispatch(isFetchingNews(true))

        const news = await new NewsService().getNews()

        dispatch(updateNews(news))
        dispatch(isFetchingNews(false))
    }
}