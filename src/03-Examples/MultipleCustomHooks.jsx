import { useCounter, useFetch } from '../hooks';
import { LoadinQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <>
        <h2>TheBreakingBad</h2>
        <hr />

        {
          isLoading
          ? <LoadinQuote />
          : <Quote author={ author } quote={ quote } />
            
        }

        <button 
        className='btn btn-primary' 
        disabled={ isLoading }
        onClick={ () => increment(1) }
        >
          Next quote
        </button>
    </>
  )
}

