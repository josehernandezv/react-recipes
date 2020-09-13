import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Clock from './clock';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const bgURL =
    'https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: `url("${bgURL}") no-repeat center center fixed`,
        backgroundSize: 'cover',
    },
    title: {
        flexGrow: 1,
    },
    container: {
        paddingTop: theme.spacing(2),
    },
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" mt={10}>
                <Container maxWidth="xs">
                    <Toolbar disableGutters>
                        <Typography variant="h6" className={classes.title}>
                            Pokedex
                        </Typography>
                        <Clock />
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth="xs" className={classes.container}>
                <Paper elevation={3}>{children}</Paper>
            </Container>
        </div>
    );
};

export default Layout;
