// import produceData from '../mockData/produce.json';

const RECEIVE_ITEM = "RECEIVE_ITEM";

export const receiveItem = (id) => ({
    type: RECEIVE_ITEM,
    id: id,
    count: 1
})

export default function cartReducer (state = {}, action) {
    const nextState = Object.assign({}, state.freeze);

    switch (action.type) {
        case RECEIVE_ITEM:
            nextState[action.item.id] = action.item;
            return nextState;
        default:
            return nextState;
    }
}