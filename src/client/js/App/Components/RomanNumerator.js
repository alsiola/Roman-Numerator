import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NumericInput from './NumericInput';
import RomanOutput from './RomanOutput';

export default class RomanNumerator extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 1
        }
    }

    onChange(value) {
        this.setState({
            value
        })
    }

    render() {
        return (
            <Row>
                <Col xs={8} xsOffset={2}>
                    <NumericInput
                        initialValue={this.state.value}
                        onChange={value => this.onChange(value)}
                        label="Enter A Number"
                        min={1}
                        max={1000000}
                    />
                </Col>
                <Col xs={12}>
                    <RomanOutput value={this.state.value} />
                </Col>
            </Row>
        )
    }
}