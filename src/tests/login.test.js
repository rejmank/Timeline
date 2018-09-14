import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/login/login.jsx';
import mockAxios from 'axios';
import {shallow, mount} from 'enzyme';

describe('Login container component', () => {
    it('should render input', () => {
        const component = shallow(<Login />);
        expect(component).toMatchSnapshot();
    });
    it('should redirect after click on button', () => {
        window.location.replace = jest.fn();
        const component = shallow(<Login />);
        component.find('button').simulate('click');
        expect(window.location.replace).toBeCalled();
    });
     it('Should yell error if error parameter is obtained', ()=> {
         const component = shallow(<Login />);
         component.setProps({
             error : true
        })
         expect(component).toMatchSnapshot();
     });

      
    
    it('should display login if no parameter is obtnained', ()=> {
       const component = shallow(<Login />);
       component.setProps({
            location: {hash: "something"
             }
         })
        expect(component).toMatchSnapshot();
        
    });
});