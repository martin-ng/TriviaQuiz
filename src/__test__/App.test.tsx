import React from 'react';
import { screen } from "@testing-library/react";
import { WelcomeCard } from '../Components/'
import App from '../App';

import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("<App /> component", () => {

    it("renders correctly without crashing", () => {
        const wrapper = shallow(<WelcomeCard />);
        expect(wrapper).toMatchSnapshot()
    })

    it("displays `Welcome to the Quiz App`", () => {
        render(<App />)
        const textElement = screen.getByText(/Welcome to the Quiz App/i);
        expect(textElement).toBeInTheDocument();
    })
})

