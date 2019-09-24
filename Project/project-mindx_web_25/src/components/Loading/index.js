import React, { Component } from 'react'
import loadingGif from "./loading.gif"

export default class Loading extends Component {
    render() {
        return (
            <div style={{height:50, textAlign: "center"}}>
                <img src={loadingGif} alt="" style={{height: '100%'}}/>
            </div>
        )
    }
}
