import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";


export function LoginPage(props) {

   // const classes = useStyles();

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const handleInputEmail = event => {
        setEmail(event.target.value);
    };

    const handleInputPassword = event => {
        setPassword(event.target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.login(email, password)
    }

    return (
        <div>
aaaaaaaa
           {/*  <ImageLogo>
                <img src={FourFood} />
            </ImageLogo>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <FontEnter>Entrar</FontEnter>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            placeholder="email@email.com"
                            autoComplete="email"
                            autoFocus
                            onChange={handleInputEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleInputPassword}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ background: "#e8222e" }}
                            className={classes.submit}
                            onClick={handleOnSubmit}
                        >
                            Entrar
              </Button>
                    </form>

                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Link onClick={props.goToSignUp} variant="body2" color="inherit">
                                Não possui cadastro? Clique aqui.
                </Link>
                        </Grid>
                    </Grid>
                </div>
            </Container> */}
        </div>

    )
}


export const mapDispatchToProps = (dispatch) =>({
    goToSignUp: () => dispatch(push(routes.signupPage)),
    goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
    //login: (email, password)=> dispatch(userLogin(email, password))
  })
  
  export default connect(null, mapDispatchToProps)(LoginPage);