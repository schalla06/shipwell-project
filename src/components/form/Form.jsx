import React from 'react';
import Input from '../input/Input.jsx';

import { composeValidators, required } from "../../utils/validation";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stopName: {
                value: "",
                error: false,
                errorMessage: "",
                disableButton: true,
                validators: composeValidators(required())
            },
            stopAddress: {
                value: "",
                error: false,
                errorMessage: "",
                disableButton: true,
                validators: composeValidators(required())
            }
        }
    }
    
    render() {
        const {stopName, stopAddress} = this.state;
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <Input 
                    label="Stop Name"
                    type="text"
                    name="stopName"
                    id="stopName"
                    value={stopName.value}
                    error={stopName.error}
                    errorMessage={stopName.errorMessage}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    >
                    </Input>
                    <Input 
                    label="Stop Address"
                    type="text"
                    name="stopAddress"
                    id="stopAddress"
                    value={stopAddress.value}
                    error={stopAddress.error}
                    errorMessage={stopAddress.errorMessage}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    >
                    </Input>
                </form>
            </div>
        );
    }
}

export default Form;