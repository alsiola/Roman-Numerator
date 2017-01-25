import React from 'react';
import {Grid, PageHeader} from 'react-bootstrap';
import RomanNumerator from './Components/RomanNumerator';

export default class App extends React.Component {
    render() {
        return (
            <Grid>
                <PageHeader>Roman Numerator <small>An app by Alex Young</small></PageHeader>
                <RomanNumerator />
            </Grid>
        );
    }
}