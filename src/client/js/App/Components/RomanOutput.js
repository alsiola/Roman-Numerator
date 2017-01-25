import React from 'react';
import convertToRoman from './convertToRoman';
import {Col} from 'react-bootstrap';

export default class RomanOutput extends React.Component {
    render() {
        return (
            <Col xs={12}>
                <div className='big'>{convertToRoman(this.props.value)}</div>            
            </Col>
        );
    }
}