import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import LoginModal from '../ModalLogin'
import RegisterModal from '../ModalRegister'

class NavBar extends React.Component {
    state = {
        isOpen: false,
        loginModalVisible: false,
        registerModalVisible: false
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

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Instagram</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#" onClick={this.toggleLoginModalVisible}>Login</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink href="#" onClick={this.toggleRegisterModalVisible}>Register</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
                <LoginModal 
                    submit={this.props.onLogin}
                    visible={this.state.loginModalVisible} 
                    onToggle={this.toggleLoginModalVisible}
                />
                <RegisterModal
                    submit={this.props.onRegister}
                    visible={this.state.registerModalVisible}
                    onToggle={this.toggleRegisterModalVisible}
                />
            </div>
        )
    }
}

export default NavBar