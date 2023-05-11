import { NavLink } from 'react-router-dom';
import './Header.css';
import { MagnifyingGlass } from 'phosphor-react';



export function Header(){
    return(
        
    <div className='header'>

            <img src="https://www.instagram.com/p/CcRlU2QLZVe/" alt="logo" />
    
            <nav className='links'>
                
                <NavLink to="" >
                    <span>QUEM SOMOS</span>
                </NavLink>

                <NavLink to="" >
                    <span>O QUE FAZEMOS</span>
                </NavLink>

                <NavLink to="" >
                    <span>COMO AJUDAR</span>
                </NavLink>

                <NavLink to="" >
                    <span>MÍDIA</span>
                </NavLink>
                <a className='pesquisarNoSite' href="">
                    <MagnifyingGlass/>
                </a>

            </nav>
    </div>
            
    )
}


