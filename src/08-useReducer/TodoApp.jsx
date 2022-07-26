import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <>
      <h1>Tasks to do: { todosCount }, <small>Pending: { pendingTodosCount }</small></h1>
      <hr />

        <div className="row">
            <div className="col-7">
                {/* TodoList*/ }
                <TodoList 
                  todos={ todos } 
                  onDeleteTodo={ handleDeleteTodo }
                  onToggleTodo={ handleToggleTodo }
                />
        
            </div>

            <div className="col-5">
               
                <h4>Tasks to do</h4>
                <hr />
                     {/* TodoAdd */}
                     <TodoAdd onNewTodo={ handleNewTodo }/>
                
            </div>

        </div>      
    </>
  )
}
