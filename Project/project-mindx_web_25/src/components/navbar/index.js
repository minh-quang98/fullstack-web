import React from "react";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Input, Form } from 'reactstrap';
import LoginModal from '../ModalLogin'
import RegisterModal from '../ModalRegister'

class NavBar extends React.Component {
    state = {
        isOpen: false,
        loginModalVisible: false,
        registerModalVisible: false,
        search: ""
    }

    toggle = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        });
    };

    toggleLoginModalVisible = () => {
        this.setState ({
            loginModalVisible: !this.state.loginModalVisible
        })
    }

    toggleRegisterModalVisible = () => {
        this.setState ({
            registerModalVisible: !this.state.registerModalVisible
        })
    }
    register = async (payload) => {
        try {
            const response = await this.props.onRegister(payload)
            if (response.status === 200) {
                this.toggleRegisterModalVisible();
                alert("Register Successfully!")
            } else {
                alert("Register fall!")
            }
        } catch(err){
            alert("Register fall!")
        } finally {
            this.toggleRegisterModalVisible()
        }
    }

    login = async (payload) => {
        try {
            const response = await this.props.onLogin(payload)
            if (response.status === 200) {
                // this.toggleLoginModalVisible();
                alert("Login Successfully!")
            } else {
                alert("Login fall!")
            }
        } catch(err){
            alert("Login fall!")
        } finally {
            this.toggleLoginModalVisible()
        }
    }
    searchOnChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    onSearch = (event) => {
        event.preventDefault()
        this.props.onSearch(this.state.search)
    }


    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">Instagram</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        {!this.props.isAuthed ?
                        <>
                            <NavItem>
                                <NavLink href="#" onClick={this.toggleLoginModalVisible}>Login</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="#" onClick={this.toggleRegisterModalVisible}>Register</NavLink>
                            </NavItem>
                        </> : <NavItem>
                                <NavLink href="#" >Logout</NavLink>
                            </NavItem>
                        }
                        <NavItem>
                            <Form onSubmit={this.onSearch}>
                                <Input className="form-control mr-sm-2" value={this.state.search} onChange={this.searchOnChange}/>
                            </Form>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
                </Navbar>
                <LoginModal 
                    submit={this.login}
                    visible={this.state.loginModalVisible} 
                    onToggle={this.toggleLoginModalVisible}
                />
                <RegisterModal
                    submit={this.register}
                    visible={this.state.registerModalVisible}
                    onToggle={this.toggleRegisterModalVisible}
                />
            </div>
        )
    }
}

export default NavBar