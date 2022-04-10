import Axios from 'axios';
export const getResultValue = ({result}) => result.value;

// action name creator
const reducerName = 'result';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_RESULT = createActionName('SET_RESULT');


/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const setResultValue = payload => ({ payload, type: SET_RESULT });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
        return {
          ...statePart,
          loading: {
            active: true,
            error: false,
          },
        };
      }
      case FETCH_SUCCESS: {
        return {
          ...statePart,
          loading: {
            active: false,
            error: false,
          },
          value: action.payload,
        };
      }
      case FETCH_ERROR: {
        return {
          ...statePart,
          loading: {
            active: false,
            error: action.payload,
          },
        };
      }
    case SET_RESULT:
      return {
        ...statePart,
        value: action.payload
      };
    default:
      return statePart;
  }
}


export const classifyFromAPI = (body) => {
    return (dispatch, getState) => {
      dispatch(fetchStarted());
  
      Axios
        .post("http://localhost:3000/api", body)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    };
  };