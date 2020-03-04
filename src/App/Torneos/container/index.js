// Dependencies
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import Torneos from '../components'
// Actions
import { tornaments } from '../actions'

export default connect(dispatch => bindActionCreators(
  {
    tornaments
  },
  dispatch
))(Torneos)