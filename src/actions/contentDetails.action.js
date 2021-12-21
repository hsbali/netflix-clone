import * as t from "../types";
import generateQueryParams from "../utils/generateQueryParams";
import request from "../utils/request";

const defaulQueryParams = {
  language: "en-US",
};

export const getContentDetails =
  (type, id, requestOptions) => async (dispatch) => {
    try {
      dispatch({
        type: t.GET_DETAILS_REQUEST,
      });

      const res = await request(
        "GET",
        `${
          process.env.REACT_APP_DB_BASE_URL
        }/3/${type}/${id}${generateQueryParams({
          ...defaulQueryParams,
          ...requestOptions,
        })}`
      );

      dispatch({
        type: t.GET_DETAILS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: t.GET_DETAILS_FAIL,
      });
      if (err.response) return alert(err.message);
    }
  };

export const clearContentDetails = () => (dispatch) => {
  dispatch({
    type: t.CLEAR_DETAILS,
  })
}
