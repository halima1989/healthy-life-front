"use client"

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useIsMobile } from '../../Utils/isMobile';
import { isConnected } from '../../Utils/isConnected';
import { isAdmin } from '../../Utils/isAdmin';
import { Tooltip } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';
import MyLogo from '../MyLogo';
import { CartContext } from '@/Context/cartContext';

const Header = () => {
    const { push } = useRouter();
    const { cart } = useContext(CartContext); // Context pour obtenir la quantité totale
    const [connect, setIsConnect] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        setIsConnect(isConnected);
        setAdmin(isAdmin);
    }, [isConnected]);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsConnect(false);
        push('/');
    };

    return (
        <header className={classNames('header z-50 sticky top-0 text-white shadow-md flex items-center justify-between w-full px-8 py-3', { 'bg-[#53AC47]': !isMobile, 'bg-[#008000]': isMobile })} style={{ fontSize: '1.1rem' }}>
            {/* Logo et Titre */}
            <div className="flex items-center">
                <MyLogo />
            </div>

            {/* Navigation */}
            <nav className={classNames('nav font-semibold text-lg', { hidden: !isOpen && isMobile, block: !isMobile || isOpen })}>
                <ul className="flex items-center space-x-4">
                    <li><Link href="/" aria-label="Accueil" className="hover:text-gray-300 transition duration-300">Home</Link></li>
                    <li><Link href="/myApp/product" aria-label="Produits" className="hover:text-gray-300 transition duration-300">Produits</Link></li>
                    <li><Link href="/myApp/register" aria-label="S'enregistrer" className="hover:text-gray-300 transition duration-300">S'enregistrer</Link></li>
                    <li><Link href="/myApp/login" aria-label="Se connecter" className="hover:text-gray-300 transition duration-300">Se connecter</Link></li>

                    {connect && (
                        <li>
                            <button onClick={logout} className="hover:text-gray-300 transition duration-300">Logout</button>
                        </li>
                    )}
                </ul>
            </nav>

            {/* User, Cart, and Admin Profile */}
            <div className="flex items-center space-x-4">
                {admin ? (
                    <Tooltip title="Go to manage dashboard">
                        <Link href="/myApp/admin" className="text-lg hover:text-gray-300 transition duration-300">Admin</Link>
                    </Tooltip>
                ) : (
                    <Tooltip title="Go to your profile">
                        <Link href="/myApp/profile" className="text-lg hover:text-gray-300 transition duration-300">Profile</Link>
                    </Tooltip>
                )}

                <Tooltip title="Go to cart">
                    <Link href="/myApp/cart" className="relative hover:text-gray-300 transition duration-300">
                        <FaShoppingCart className="h-6 w-6" />
                        {/* {cart.totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 rounded-full bg-red-500 px-2 text-xs text-white">
                                {cart.totalQuantity}
                            </span>
                        )} */}
                    </Link>
                </Tooltip>
            </div>
        </header>
    );
};

export default Header;
