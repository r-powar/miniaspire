import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoanApplication from '../LoanApplication';

describe('LoanApplicationComponent', () => {
    it('should render without throwing error', () => {
        expect(shallow(<LoanApplication/>).find('form.loanApp').exists()).toBe(true);
    });
});

/*
describe('NRIC field changes', () => {
    it('should react to change event and update state value', () => {
        const wrapper = shallow(<LoanApplication/>);
        wrapper.find('#idNumber').simulate('change', {target:{value:'S324S2F'}});
        expect(wrapper.props('data')).toHaveProperty('nric','S324S2F');
    })
});
*/