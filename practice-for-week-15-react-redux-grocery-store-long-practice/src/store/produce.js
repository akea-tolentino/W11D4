import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE"

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData,
    };
};

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const nextState = Object.assign({}, state.freeze);
            action.produce.forEach(produce => {
                nextState[produce.id] = produce;
            });
            return nextState;
        default:
            return state;
    };
};
