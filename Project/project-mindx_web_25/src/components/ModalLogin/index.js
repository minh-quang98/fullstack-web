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

class ModalLogin extends React.Component {

    state = {
        email: "",
        password: "",
        rememberMe: false
    };

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

    onRememberMeOnChange = () => {
        this.setState ({
            rememberMe: !this.state.rememberMe
        })
    }

    onLogin = () => {
        this.props.submit(this.state)
    }

    render () {
        return (
            <Modal 
                isOpen={this.props.visible} 
                toggle={this.props.onToggle} 
                className={this.props.className}
            >
                <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                <ModalBody>
                <Form>
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
                    <FormGroup check>
                        <Input 
                            type="checkbox" 
                            name="check" 
                            onClick={this.onRememberMeOnChange}
                        />Remember me
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        onClick={this.onLogin}>Login</Button>
                    <Button 
                        color="secondary" 
                        onClick={this.props.onToggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default ModalLogin