import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


/*

test('calling handleLoanTermChange should change state', () => {
    const component = mount(<App/>);

    component.instance().handleLoanTermChange({event: {target: 'some value'}});

    expect(Object.keys(component.state('selectedLoanTerm')).length).toBeGreaterThan(0);
});
*/