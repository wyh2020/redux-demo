/**
 * Created with wangyonghua.
 * Date: 2018-11-25
 * Time: 10:17
 */
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action';

export default function counter(state = 0, action){
  switch(action.type){
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
