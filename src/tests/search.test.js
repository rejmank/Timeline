import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/search/search.jsx';
import mockAxios from 'axios';
import {shallow, mount} from 'enzyme';

describe('Search component',() => {
    it('should render', ()=> {
     
    });
    it('should call search after two or more chars are in input', () => {
        const component = shallow(<Search/>);
        const searchOnSpotify = jest.fn();
        component.find('input').simulate('change', '');
        expect(searchOnSpotify).notToBeCalled();
        component.find('input').simulate('change', 'A');
        expect(searchOnSpotify).notToBeCalled()
        component.find('input').simulate('change', 'ab');
        expect(searchOnSpotify).toBeCalled()
    }); 
    it('should redirect if no token is in sessionstorage', () => {

    });
});