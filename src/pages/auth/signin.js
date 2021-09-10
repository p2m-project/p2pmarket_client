import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  ThemeProvider,
  FormControlLabel,
  Checkbox,
  Button,
  ButtonGroup,
  createTheme,
  makeStyles,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'left',
    fontSize: '1.4rem',
    fontWeight: 600,
  },
  headerHelper: {
    color: grey[700],
    fontSize: '0.9rem',
    textAlign: 'left',
  },
  textField: {
    minWidth: '100%',
  },
  fullWidth: {
    minWidth: '100%',
  },
  signInButton: {
    minWidth: '100%',
    padding: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(1),
  },
  actionButton: {
    minWidth: '30px',
    fontSize: '0.8rem',
    paddingTop: '0px',
    paddingBottom: '0px',
    textTransform: 'none',
  },
  rememberMe: {
    fontSize: '0.8rem',
    // fontWeight: 300,
  },
  createAccountText: {
    fontSize: '0.8rem',
    textAlign: 'right',
    // fontWeight: 300,
  },
  passwordRow: {
    paddingTop: '0px!important',
  },
}));

function SignInScreen() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        className={classes.root}
      >
        <Grid item xs={12} md={6} lg={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h4" className={classes.header}>
                Sign in to p2p|market
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className={classes.headerHelper}>
                Enter your details
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <form className={classes.fullWidth}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.textField}
                      required
                      label="Email Address"
                      autoComplete="username"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      className={classes.textField}
                      required
                      label="Password"
                      autoComplete="current-password"
                      variant="outlined"
                      type="password"
                    />
                  </Grid>

                  <Grid item xs={12} className={classes.passwordRow}>
                    <Grid container spacing={0}>
                      <Grid item xs={12}>
                        <Grid
                          container
                          spacing={0}
                          direction="row"
                          alignItems="center"
                        >
                          <Grid item xs={true}>
                            <FormControlLabel
                              control={
                                <Checkbox color="primary" size="small" />
                              }
                              label={
                                <Typography
                                  variant="body1"
                                  className={classes.rememberMe}
                                >
                                  Remember me
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item xs="auto">
                            <Button
                              variant="text"
                              color="primary"
                              size="small"
                              className={classes.actionButton}
                            >
                              Forgot password?
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.signInButton}
                        >
                          Sign In
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      container
                      spacing={0}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs="auto">
                        <span className={classes.createAccountText}>
                          Don't have an account?
                        </span>
                      </Grid>
                      <Grid item xs="auto">
                        <Button
                          variant="text"
                          color="primary"
                          size="small"
                          className={classes.actionButton}
                        >
                          Get started
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInScreen;
