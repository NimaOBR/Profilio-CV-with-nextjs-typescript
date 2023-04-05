import React,{FunctionComponent} from 'react';
import { Category } from '../type';

export const NavItem:FunctionComponent<{item:Category|'all',handelFiilterCategory:Function,active:string}> = ({item,handelFiilterCategory,active}) => {
    let className = "capitalize cursor-pointer hover:text-Newgreen"
    active === item ? className+=' text-Newgreen':''
    
    return (
        <li className={className} onClick={()=>handelFiilterCategory(item)}>
            {item}
        </li>
    );
};

const NavbarProject:FunctionComponent<{handelFiilterCategory:Function,active:string}> = (props) => {
    return (
        <div className='flex space-x-3 px-3 py-3 list-none'>
            <NavItem item='all'{...props}/>
            <NavItem item='react'{...props}/>
            <NavItem item='nextjs'{...props}/>
            <NavItem item='typescript'{...props}/>
        </div>
    );
};

export default NavbarProject;