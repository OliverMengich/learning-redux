import store from "./store";
import { bugAdded, bugResolved } from './actions.js'
// const unsubscribe = store.subscribe(()=>{
//     console.log('Store changed! \n', store.getState());
// })
store.subscribe(()=>{
    console.log('store changed! ',store.getState());
})
store.dispatch(bugAdded('bug 1'));
store.dispatch(bugResolved(1,true));
//unsubscribe();

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })
console.log(store.getState());