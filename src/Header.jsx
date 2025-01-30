import React, { useContext, useState } from 'react';
import Logo from './assets/logo.svg'
import Ring from './assets/ring.svg'
import Moon from './assets/icons/moon.svg'
import ShoppingCart from './assets/shopping-cart.svg'
import CartDetails from './cine/CartDetails';
import { MovieContext } from './context';

function Header() {
    const [showCart, setShowCart] = useState(false);
    const {cartData} = useContext(MovieContext);
    function handleCartShow(){
        setShowCart(true)
    }
    return (
        <header>
            {
                showCart && <CartDetails onClose={setShowCart}></CartDetails>
            }
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={Logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-green-400/20 dark:bg-green-400/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-green-400/20 dark:bg-green-400/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Moon} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a onClick={handleCartShow} className="bg-green-400/20 dark:bg-green-400/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ShoppingCart} width="24" height="24" alt="" />
                            {
                                cartData.length>0 && <span className='rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]'>{cartData.length}</span>
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;