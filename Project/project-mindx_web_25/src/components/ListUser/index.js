import React, { Component } from 'react'

export default class ListUser extends Component {
    render() {
        const { listUser } = this.props;
        return (
            <div>
                <ul>
                    {listUser.map(item => (<li key={item.email}>{item.email}</li>))}
                </ul>
            </div>
        )
    }
}
