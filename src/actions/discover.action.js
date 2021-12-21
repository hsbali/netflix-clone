import * as t from '../types'
import generateQueryParams from '../utils/generateQueryParams'
import request from '../utils/request'

const defaulQueryParams = {
	language: 'en-US',
	sort_by: 'popularity.desc',
	page: 1,
	include_adult: false,
	include_video: false,
}

export const getMoviesInCarousel =
	(carouselOptions, requestOptions) => async (dispatch) => {
		try {
			dispatch({
				type: t.GET_MOVIES_REQUEST,
			})
			if (!carouselOptions) {
				const err = { message: 'Carousel option are not defined' }
				throw err
			}

			const res = await request(
				'GET',
				`${
					process.env.REACT_APP_DB_BASE_URL
				}/3/discover/movie${generateQueryParams({
					...defaulQueryParams,
					...requestOptions,
				})}`
			)

			const carouselData = {
				name: carouselOptions.name,
				itemType: carouselOptions.itemType,
				items: res.data.results,
				page: res.data.page,
			}

			dispatch({
				type: t.GET_MOVIES_SUCCESS,
				payload: { key: carouselOptions.key, data: carouselData },
			})
		} catch (err) {
			console.log(err)
			dispatch({
				type: t.GET_MOVIES_FAIL,
			})
			if (err.response) return alert(err.message)
		}
	}

export const getTvShowsInCarousel =
	(carouselOptions, requestOptions) => async (dispatch) => {
		try {
			dispatch({
				type: t.GET_TV_SHOWS_REQUEST,
			})
			if (!carouselOptions) {
				const err = { message: 'Carousel option are not defined' }
				throw err
			}

			const res = await request(
				'GET',
				`${
					process.env.REACT_APP_DB_BASE_URL
				}/3/discover/tv${generateQueryParams({
					...defaulQueryParams,
					...requestOptions,
				})}`
			)

			const carouselData = {
				name: carouselOptions.name,
				itemType: carouselOptions.itemType,
				items: res.data.results,
				page: res.data.page,
			}

			dispatch({
				type: t.GET_TV_SHOWS_SUCCESS,
				payload: { key: carouselOptions.key, data: carouselData },
			})
		} catch (err) {
			console.log(err)
			dispatch({
				type: t.GET_TV_SHOWS_FAIL,
			})
			if (err.response) return alert(err.message)
		}
	}

export const clearCarouselsWithItems = () => (dispatch) => {
	dispatch({
		type: t.CLEAR_CAROUSELS,
	})
}
