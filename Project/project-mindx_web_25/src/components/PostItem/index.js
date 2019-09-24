import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import { FaThumbsUp } from "react-icons/fa"
import axios from "axios"
import CmtForm from "../CommentForm"
import { follow } from "../../actions/user"
import { unfollow } from "../../actions/user"

export default class PostItem extends Component {

    state = {
        liked: false,
        numberOfLike: 0,
        comments: []
    }
 
    like = async () => {
        const{post, authedUser} = this.props;
        const res = await axios.post(`http://localhost:5000/post/${post.id}/like`, {
            email: authedUser.email
        })
        if (res.status === 200) {
            this.setState({
                liked: res.data.liked,
                numberOfLike: res.data.numberOfLike
            })
        }
    }

    comment = async (content) => {
        const {post, authedUser} = this.props;
        const res = await axios.post(`http://localhost:5000/post/${post.id}/comment`, {
            email: authedUser.email,
            content: content
        })
        if (res.status === 200) {
            this.setState({
                comments: [...this.state.comments, res.data]
            })
        }
    }
    follow = async () => {
        try {
            const res = await follow(this.props.post.email, this.props.authedUser.email)
            this.props.onFollow(res.follower);
        } catch (err) {
            alert("Cannot follow")
        }
    }

    unfollow = async () => {
        try {
            const res = await unfollow(this.props.post.email, this.props.authedUser.email)
            this.props.onUnfollow(res.follower);
        } catch (err) {
            alert("Cannot unfollow")
        }
    }

    render() {
        const post = this.props.post;
        const {liked, numberOfLike} = this.state;
        return (
            <div style={{marginTop: 50, marginBottom:50}}>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-2">
                            {post.email}
                            {
                                this.props.isFollowing
                                ? <Button outline color="warning" className="float-right" onClick={this.unfollow}>Followed</Button>
                                : <Button outline color="primary" className="float-right" onClick={this.follow}>Follow</Button>
                            }
                        </CardTitle>
                        <CardImg width="100%" src={"http://localhost:5000/"+post.imageUrl} alt="Card image cap" />
                        <CardText style={{fontSize: 26}}>{post.content}</CardText>
                        <div className={"mt-1 mb-1"} onClick={this.like}>
                            <FaThumbsUp size="2em" color={liked? "#ff0000" : "#0066ff"}/>
                            {numberOfLike > 0 ? <span>{numberOfLike} </span> : null}
                        </div>
                        <CmtForm onSubmit={this.comment} />
                    </CardBody>
                </Card>                
            </div>
        )
    }
}
