import React, { Component } from 'react';
import axios from "axios"
import Loading from '../Loading';
import PostItem from "../PostItem/index"

export default class NewsFeed extends Component {
    state = {
        listPost:[],
        loading: false
    }

    toogleLoading = (isloading) => {
        this.setState({
            loading: isloading
        })
    }

    fetchNewFeeds = async () => {
        this.toogleLoading(true)
        setTimeout( async () => {
            const response = await axios.get("http://localhost:5000/post")
            if (response.status === 200) {
                this.setState({
                    listPost: response.data
                })
                this.toogleLoading(false)
            }
        }, 3000)

    }

    componentDidMount() {
        this.fetchNewFeeds();
    }


    render() {
        return (
            <div>
                {
                    this.state.loading
                        ? <Loading />
                        : <div>
                            {
                                this.state.listPost.map(post => 
                                    <PostItem
                                        onUnfollow={this.props.onUnfollow}
                                        onFollow={this.props.onFollow}
                                        isFollowing={this.props.listFollowing.indexOf(post.email) > -1} 
                                        key={post.id} 
                                        post={post} 
                                        authedUser={this.props.authedUser}/>)
                            }

                        </div>
                }
            </div>
        )
    }
}
