import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import {
    InputAdornment,
    Paper,
    FormControl,
    InputLabel,
    Input,
    IconButton,
    Button
} from '@material-ui/core'
import '../styles/Login.scss'
const Login = (props) => {

    const [values, setValues] = React.useState({
        user: "",
        password: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleLogin = () => {
       
         props.login(values)
         props.history.push('/dashboard')

        
    }
    return (
        <div className="MainContainerLogin">
            <Paper elevation={4} className="FormContainer">
                <div className="LogoContainer">
                    <h1>Doggy's Toys</h1>
                </div>
                <FormControl >
                    <InputLabel htmlFor="standard-adornment-password">Usuario</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type='text'
                        value={values.user}
                        onChange={handleChange('user')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"


                                >
                                    <AccountCircle />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl >
                    <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}

                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl >
                    <Button variant="contained" color="primary" onClick={handleLogin}>
                        Login
                    </Button>
                </FormControl>
            </Paper>
        </div>
    )
}

export default Login
