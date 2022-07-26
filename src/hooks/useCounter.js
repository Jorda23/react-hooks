import { useState } from 'react';

export const useCounter = ( initialValue = 10 ) => {
    
    const [ counter, setCounter ] = useState( initialValue );

    const increment = ( value = 1 ) => {
        //setCounter( counter + value ); //original
        setCounter( (current ) => current + value ) //para resivir el valor actual, los probamos en el test
    }

    const decrement = (  value = 1 ) => {
        if(counter === 0 ) return;

        //setCounter( counter - value ); //original
        setCounter( (current) => current - value )
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}