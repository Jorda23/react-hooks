import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoHook } from './06-memos/MemoHook';
import './index.css';

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
    <MemoHook />
//  </React.StrictMode>
)
