import React, {Component} from 'react';

class AddTodos extends Component {
    initialState = {
        title: '',
        description: '',
        isEditing: false,
    }

    state = this.initialState;

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        e.target.reset();
    }
    updateState = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name] : value,
        });
    }
    render() {
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="title" autoComplete="off" placeholder="Enter title of your Todo" required type="text" onChange={this.updateState}/>
                    </div>
                    <div className="input-field col s4">
                        <input name="description" autoComplete="off" placeholder="Enter description of your Todo" required type="text" onChange={this.updateState}/>
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add Todo" className="btn green"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTodos;