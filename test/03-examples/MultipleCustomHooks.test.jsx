import { render, screen, fireEvent } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-Examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
  
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({ //esta es para la prueba de la llamada de la funcion
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach( () => {
        jest.clearAllMocks(); //para asegurarnos que las pruebas estan limpias
    });

  test('debe de mostar el componete por defecto  ', () => {

    useFetch.mockReturnValue({
        data: null,
        isLoading: true,
        hasError: null,
    });

    render( <MultipleCustomHooks />);
    
    expect(screen.getByText('Loading....') );
    expect(screen.getByText('TheBreakingBad') );

    const nextButton = screen.getByRole('button',{name: 'Next quote'});
    expect(nextButton.disabled).toBeTruthy();
  });

  test('debe de probar un Quote ', () => {

    useFetch.mockReturnValue({
        data: [{ author: 'Fernando', quote: 'Hola Mundo'}],
        isLoading: false,
        hasError: null,
    });

    render( <MultipleCustomHooks />);

    expect( screen.getByText('Hola Mundo')).toBeTruthy();
    expect( screen.getByText('Fernando')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next quote'});
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la funcion de incrementar', () => {

    useFetch.mockReturnValue({
        data: [{ author: 'Fernando', quote: 'Hola Mundo'}],
        isLoading: false,
        hasError: null,
    });

    render( <MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next quote'});
    fireEvent.click( nextButton );

    expect( mockIncrement ).toHaveBeenCalled();
  });

});
