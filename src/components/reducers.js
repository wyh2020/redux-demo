/**
 * Created with wangyonghua.
 * Date: 2018-11-25
 * Time: 10:25
 */
import { combineReducers } from 'redux'
import counter from './demo1/reducer';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
