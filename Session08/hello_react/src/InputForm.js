import React from "react"

class InputForm extends React.Component {
    state = {
        value: ""
    };

    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onChange}></input>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default InputForm;