import React from "react";
import { mount } from "enzyme";


import Counter from "./Counter";


describe('El boton add suma uno', () => {
    it('Add one to counter', () => {
        const component = mount(<Counter/>);

        // component.find("button").simulate("click");

        component.find('[className="suma"]').simulate("click");
        expect(component.find("p").equals(<p>La cuenta es 1</p>)).toEqual(true);
        component.unmount();
        
    });
    
});


describe('Los botones funcionan', () => {
    it('Buttons add and less', () => {
        const component = mount(<Counter/>);

        // component.find("button").simulate("click");

        component.find('[className="suma"]').simulate("click");
        expect(component.find("p").equals(<p>La cuenta es 1</p>)).toEqual(true);

        component.find('[className="resta"]').simulate("click");
        expect(component.find("p").equals(<p>La cuenta es 0</p>)).toEqual(true);

        component.unmount();
        
    });
    
});

describe('El boton add suma uno', () => {
    it('Add one to counter', () => {
        const component = mount(<Counter/>);

        // component.find("button").simulate("click");

        component.find('[className="suma"]').simulate("click");
        expect(component.find("p").equals(<p>La cuenta es 1</p>)).toEqual(true);
        component.unmount();
        
    });
    
});