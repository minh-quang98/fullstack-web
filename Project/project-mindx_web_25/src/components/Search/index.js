import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import queryString from "query-string"
import axios from 'axios'
import ListUser from "../ListUser"

class Search extends Component {

    state = {
        searchResult: [],
        total: 0
    }

    async componentDidMount() {
        this.fetchSearchResult()
    } 

    componentDidUpdate(prevProps) {
        if(prevProps.location.search !== this.props.location.search) {
            this.fetchSearchResult()
        }
        
    }

    fetchSearchResult = async () => {
        const query = queryString.parse(this.props.location.search).q
        console.log(query)
        const respond = await axios.get(`http://localhost:5000/user?q=${query}`)
        if (respond.status === 200) {
            this.setState({
                searchResult: respond.data.result,
                total: respond.data.total
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Search result for "{queryString.parse(this.props.location.search).q}":</h2>
                <small>Total: {this.state.total}</small>
                <ListUser listUser={this.state.searchResult}/>
            </div>
        )
    }
}

export default withRouter(Search)
