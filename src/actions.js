import * as actions from './actionTypes';
export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
})
export const bugResolved = (id, resolved) =>({
    type: actions.BUG_RESOLVED,
    payload: {
        id,
        resolved
    }
})
// export function bugAdded(description){
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: 'Bug1'
//         }
//     }
// }
