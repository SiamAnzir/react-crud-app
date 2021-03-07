import React, {Component} from  'react';

class Todos extends Component {

    handleUpdate = () => {
        this.props.updateTodo(this.indexValue, this.title.value, this.description.value);
    }

    render() {
        const {allTodos , pressUpdateButton , deleteTodo} = this.props;
        const todoLists = allTodos.map((todo,index) => {
            return todo.isEditing === true ? (
                    <tr key={index}>
                        <td>
                            <input type="text" ref={(value) => {this.title = value}} required defaultValue={todo.title}/>
                        </td>
                        <td>
                            <input type="text" ref={(value) => {this.description = value}} required defaultValue={todo.description}/>
                        </td>
                        <td>
                            <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexValue = index}} className="btn green"/>
                        </td>

                    </tr>

            ) : (
                <tr key={index}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td><button className="btn blue" onClick={() => pressUpdateButton(index)}>Update</button>  <button className="btn red" onClick={() => deleteTodo(index)}> Delete </button></td>
                </tr>
            );
        });
        return(

            <table className="striped">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Update or Delete</th>
                </tr>
                </thead>
                <tbody>
                    {todoLists}
                </tbody>
            </table>
        );
    }
}

export default Todos;