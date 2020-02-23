// Dependencies
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import Login from '../components'
// Actions
import { login } from '../actions'

export default connect(null, dispatch => bindActionCreators(
  {
    login
  },
  dispatch
))(Login)
