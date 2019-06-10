import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

import{sum} from './math'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('Validar una suma', ()=>{
  it('suma dos numeros', ()=>{
    expect(sum(1,2)).toEqual(3);
    expect(sum(2,2)).toEqual(4);
  })
});


test('el componente se muestra', () => {
  const component = renderer.create(<App/>);
  let tree= component.toJSON();

  expect(tree).toMatchSnapshot();

});



