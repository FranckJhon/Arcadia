// Dependencies
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import Home from '../components'
// Actions
import { getCard } from '../actions'

export default connect(({ cards:{listofcards} }) => ({
    cards:listofcards
  }), dispatch => bindActionCreators(
  {
    getCard
  },
  dispatch
))(Home)
