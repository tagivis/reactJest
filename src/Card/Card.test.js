import React from 'react';
import {shallow} from 'enzyme';
import Card from "./Card";



describe('validacion de componente enzyme', () => {
    it('render correcto del componente', () => {
        shallow(<Card/>); 
        
    });
    
});