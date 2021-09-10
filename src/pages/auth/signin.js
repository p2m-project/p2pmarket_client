import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  ThemeProvider,
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
                Sign In
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

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.signInButton}
                    >
                      Sign In
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      container
                      spacing={0}
                      direction="row"
                      justifyContent="center"
                    >
                      <ButtonGroup variant="text" color="primary" size="small">
                        <Button className={classes.actionButton}>
                          Create Account
                        </Button>
                        <Button className={classes.actionButton}>
                          Reset Password
                        </Button>
                      </ButtonGroup>
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
