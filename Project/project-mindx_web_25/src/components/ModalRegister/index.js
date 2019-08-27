import React from "react"
import {
    Modal,
    ModalFooter,
    ModalHeader,
    ModalBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

class ModalRegister extends React.Component {

    state = {
        name: "",
        email: "",
        password: "",
        cfpassword: ""
    };

    onNameOnChange = (event) => {
        this.setState ({
            name: event.target.value
        })
    }

    onEmailOnChange = (event) => {
        this.setState ({
            email: event.target.value
        })
    }

    onPasswordOnChange = (event) => {
        this.setState ({
            password: event.target.value
        })
    }

    onCfPasswordOnChange = (event) => {
        this.setState ({
            cfpassword: event.target.value
        })
    }

    onRegister = () => {
        this.props.submit(this.state)
    }

    render () {
        return (
            <Modal 
                isOpen={this.props.visible} 
                toggle={this.props.onToggle} 
                className={this.props.className}
            >
                <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                <ModalBody>
                <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label>Name</Label>
                        <Input 
                            type="name" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.onNameOnChange} 
                            placeholder="Enter Your Name..." 
                        />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label>Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.onEmailOnChange} 
                            placeholder="Enter Email..." 
                        />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label>Password</Label>
                        <Input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.onPasswordOnChange}  
                            placeholder="Enter Password..." 
                        />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label>Confirm Password</Label>
                        <Input 
                            type="password" 
                            name="cfpassword" 
                            value={this.state.cfpassword} 
                            onChange={this.onCfPasswordOnChange}  
                            placeholder="Enter Confirm Password..." 
                        />
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        onClick={this.onRegister}>Register</Button>
                    <Button 
                        color="secondary" 
                        onClick={this.props.onToggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default ModalRegister