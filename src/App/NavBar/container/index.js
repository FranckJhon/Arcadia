// Dependencies
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import NavBar from '../components'

export default connect(({ user }) => ({
  user
}), dispatch => bindActionCreators(
  {

  },
  dispatch
))(NavBar)
