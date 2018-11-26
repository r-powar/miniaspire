import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AppHeader from '../AppHeader';

describe('AppHeaderComponent', () => {
    it('should render without throwing error', () => {
        expect(shallow(<AppHeader/>).find('header.appHeader').exists()).toBe(true);
    });

    it('renders two options, for loan application and loan repayment', () => {
        expect(shallow(<AppHeader/>).find('.headerContent').length).toBeGreaterThan(1);
    });
});
