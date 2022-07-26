const { render, screen } = require("@testing-library/react");
const { UserContext } = require("../../src/09-useContext/context/UserContext");
const { HomePage } = require("../../src/09-useContext/HomePage");

describe('Pruebas en el <HomePage />', () => {

  const user = {
    id: 1,
    name: 'Fernando'
  }

  test('debe de mostar el componente sin el usuario ', () => {
   
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); //aria-label
    expect( preTag.innerHTML ).toBe('null');
    // screen.debug()
  });

  test('debe de mostar el componente con el usuario ', () => {
   
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); //aria-label
    expect( preTag.innerHTML ).toContain(user.name);
    expect( preTag.innerHTML ).toContain(user.id.toString()); //porque lo devuelve como string
    // screen.debug()
  });
  
});
