export const getInputValue = ({input}) => input.value;

// action name creator
const reducerName = 'input';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_INPUT = createActionName('SET_INPUT');

// action creators
export const setInputValue = payload => ({ payload, type: SET_INPUT });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...statePart,
        value: action.payload
      };
    default:
      return statePart;
  }
}
