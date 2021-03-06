import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import {  useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/user.png';
import useStyles from './styles';

const App = ()=>{
    const classes = useStyles();
    const dispacth = useDispatch();

    useEffect(()=>{
        dispacth(getPosts());
    }, [dispacth]);

    return(
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container alignItems="stretch" spaicing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;