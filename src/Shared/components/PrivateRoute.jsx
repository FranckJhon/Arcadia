import React from 'react'
import { Route, Redirect } from 'react-router-dom';
const user =JSON.parse(localStorage.getItem('user'))
export const PrivateRoute = ({ component: Component, redirect, ...rest }) => (
    <Route {...rest}
        render={
            props => (
                user&&user.UserType ?
                    <Component {...props} />
                    :
                    redirect ?
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                        :
                        null
            )
        }
    />
)

export default PrivateRoute