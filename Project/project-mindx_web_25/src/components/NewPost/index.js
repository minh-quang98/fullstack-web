import React, { Component } from 'react'
import {
    Card, CardText, CardBody, CardTitle,
    CardSubtitle, Button, Input, Form
} from 'reactstrap';
import axios from 'axios';

export default class NewPost extends Component {

    state = {
        imageFile: null,
        textAreaValue: "",
        loading: false,
    }

    textAreaOnChange = event => {
        this.setState({
            textAreaValue: event.target.value
        })
    }

    imageFileOnChange = event => {
        this.setState({
            imageFile: event.target.files[0]
        })
    }

    toggleLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }

    createPost = async event => {
        event.preventDefault();
        // call API
        this.toggleLoading();
        const formData = new FormData();
        formData.append('image', this.state.imageFile)
        formData.append('email', this.props.authedUser.email)
        formData.append('content', this.state.textAreaValue)
        const response = await axios.post('http://localhost:5000/post', formData)
        if (response.status === 200) {
            this.reset();
            alert("Post created!")
        }
        this.toggleLoading();
    }

    reset = () => {
        this.setState({
            imageFile: null,
            textAreaValue: ""
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <Form onReset={this.reset} onSubmit={this.createPost}>
                            <CardTitle>
                                <h4>What's on your mind?</h4>
                            </CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>
                                <Input 
                                    rows="3" 
                                    type="textarea" 
                                    placeholder="Write sth" 
                                    value={this.state.textAreaValue}
                                    onChange={this.textAreaOnChange}/>
                                <Input 
                                    type="file" name="file" accept=".jpg,.jpeg" 
                                    onChange={this.imageFileOnChange}/>
                                {this.state.imageFile && <img alt="" src={URL.createObjectURL(this.state.imageFile)} style={{height: 200}}></img>}
                            </CardText>                            
                            <Button disabled={this.state.loading} className="float-right" color="secondary" type="reset">Reset</Button>
                            <Button disabled={this.state.loading} className="float-right" color="primary" type="submit">Post</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

