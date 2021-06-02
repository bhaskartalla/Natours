import { combineReducers } from 'redux'

import auth from '../src/login/Reducer'
import tours from '../src/overview/Reducer'
import alert from '../src/common/Reducer'

export default combineReducers({ auth, tours, alert })
