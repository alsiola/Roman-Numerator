import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class NumericInput extends React.Component {

    constructor(props) {
        super(props);
        this.numericRegex = /^[0-9]+$/;
        this.state = {
            value: this.props.initialValue
        }
    }

    isValid(str) {
        return (
            this.numericRegex.test(str)        && 
            str >= this.props.min  && 
            str <= this.props.max
        );
    }

    getValidationState() {
        return (
            this.isValid(this.state.value) 
        ) ? 'success' : 'error';
    }

    inputChanged(e) {
        const input = e.target.value;
        this.setState({
            value: input
        });

        if (this.isValid(input)) {
            this.props.onChange(input);
        }
    }

    render() {
        return (
            <FormGroup validationState={this.getValidationState()}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                    type='text'
                    value={this.state.value}
                    onChange={e => this.inputChanged(e)}
                    placeholder='Enter A Number'
                />
                <FormControl.Feedback />
                <HelpBlock>Numeric input only</HelpBlock>
            </FormGroup>
        )
    }
}