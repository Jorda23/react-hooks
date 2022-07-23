import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './08-useReducer/TodoApp';
import './index.css';

// import './08-useReducer/intro-reducer';
// import { Padre } from './07-tarea-memo/Padre';
// import { MemoHook } from './06-memos/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks';
// import { ForWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
// import { HooksApp } from './HooksApp';

ReactDOM.createRoot(document.getElementById('root')).render(
// <React.StrictMode>
    <TodoApp />
// </React.StrictMode>
)
