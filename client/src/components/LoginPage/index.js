import { Button, Grid, Link, makeStyles, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { ReactComponent as FocusLogo } from "./logo.svg";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
    },
    login: {
        margin: "auto",
        padding: theme.spacing(3),
        width: 440,
    },
    signInForm: {
        width: "100%",
    },
    signInTextField: {
        margin: "8px 0px",
        width: "100%",
    },
    signInBtn: {
        backgroundColor: "#30a0f5",
        borderRadius: "28px",
        color: "#ffffff",
        height: "56px",
        margin: "8px 0 16px 0",
        width: "100%",
    },
    signUpRedirect: {
        margin: "16px 0",
    },
}));

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const classes = useStyles();

    const fetchLogin = (username, password) => {
        fetch("http://localhost:9000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
            referrerPolicy: "no-referrer",
        }).then((response) => {
            if (!response.ok) {
                // show user error message for incorrect user/password
            } else {
                const data = response.json();
                console.log(data.token);
                // retrieve user token
                // persist user token with use-persisted state
            }
        });
    };

    const submitLogin = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        fetchLogin(email, password);
    };

    return (
        <div className={classes.container}>
            <Paper className={classes.login}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={0}>
                    <Grid item>
                        <div>
                            <FocusLogo width={380} fill="#454545" />
                        </div>
                    </Grid>
                    <form className={classes.signInForm} onSubmit={submitLogin}>
                        <Grid item>
                            <TextField
                                className={classes.signInTextField}
                                label="Email address"
                                variant="outlined"
                                value={email}
                                onInput={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                className={classes.signInTextField}
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={password}
                                onInput={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <Button className={classes.signInBtn} type="submit" variant="contained">
                                Sign In
                            </Button>
                        </Grid>
                    </form>
                    <Grid item className={classes.signUpRedirect}>
                        <Link href="#">Don't have an account? Sign up</Link>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default LoginPage;
