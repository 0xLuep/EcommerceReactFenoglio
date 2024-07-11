import { CartWidget } from "./CartWidget";


export const NavBar = () => {
    return <div className='nav-cont'>
                <h1 className="nav-h1">Libreria JXP</h1>
                <ul className='nav-ul'>
                    <li className='nav-li'>
                        <a href="#">Misterio</a>
                    </li>
                    <li className='nav-li'>
                        <a href="#">Acción</a>
                    </li>
                    <li className='nav-li'>
                        <a href="#">Ciencia Ficción</a>
                    </li>
                </ul>
                <CartWidget />
            </div>
};