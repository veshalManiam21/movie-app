import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_FAVOURITES,
  ADD_FAVOURITES_SUCCESS,
  MOST_POPULAR_SUCCESS,
  MOST_POPULAR,
} from "../events/events";

function MostPopularMovies() {
  return axios
    .get("https://imdb-api.com/en/API/MostPopularMovies/k_406ec6np")
    .then((response) => response.data);
}

function* getMostPopularMoviesData() {
  const mostPopular = yield call(MostPopularMovies);
  yield put({ type: MOST_POPULAR_SUCCESS, mostPopular });
}

function* addMostPopularMoviesFav({ item }) {
  yield put({ type: ADD_FAVOURITES_SUCCESS, item });
}

function* movieSaga() {
  yield takeEvery(MOST_POPULAR, getMostPopularMoviesData);
  yield takeEvery(ADD_FAVOURITES, addMostPopularMoviesFav);
}

export default movieSaga;
