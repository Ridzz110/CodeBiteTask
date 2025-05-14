import { useState } from 'react';
import logo from '../assets/weeb.png';
import menu from '../assets/menu.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { name: 'Hero 1', path: '/hero1' },
        { name: 'Hero 2', path: '/hero2' }
      ];

    return (
        <nav className="mx-auto mt-6 bg-grey md:p-4 md:py-6 p-2 w-10/12 rounded-xl shadow-2xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-12">
                    <img src={logo} alt="Logo" className="ml-2 h-6 w-auto" />
                    <ul className="hidden md:flex space-x-7">
                        {links.map((link, index) => (
                         <li key={index}>
                           <Link to={link.path} className="text-white">
                             {link.name}
                           </Link>
                         </li>
                       ))}
                    </ul>
                </div>
                <div className="flex items-center space-x-5">
                    <a className="hidden md:block text-white">Log in</a>
                    <button className="hidden md:block bg-purple hover:bg-purple-800 text-white px-4 py-2 rounded-lg">
                        Sign up
                    </button>
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <img src={menu} alt="Menu" className="h-6 w-auto" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="mt-4 md:hidden flex flex-col items-start space-y-3">
                     {links.map((link, index) => (
                       <Link key={index} to={link.path} className="text-white" onClick={() => setIsOpen(false)}>
                         {link.name}
                       </Link>
                     ))}
                    <a className="text-white">Log in</a>
                    <button className="bg-purple text-white px-4 py-2 rounded-lg">
                        Sign up
                    </button>
                </div>
            )}
        </nav>
    );
}
