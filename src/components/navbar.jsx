import Link from 'next/link';
import { CiUser } from "react-icons/ci";
import { FaUserCog } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <div className=''>
                <header className="main-header flex justify-end items-center">
                    <label for="btn-nav" className="btn-nav"><i className="fas fa-bars"></i></label>
                    <input type="checkbox" id="btn-nav" />
                    <>
                        <div className='mx-4'><CiUser />Sign Up</div>
                        <div className='mx-4'><CiUser />Log in</div>
                        <div>Log out</div>
                        <div><FaUserCog /></div>
                    </>
                    <nav>
                        <ul className="navigation">
                            <li><Link className='' href={'/'}>Vila Segura</Link></li>
                            <li><Link className='p-2' href={'/addTopic'}>Add House</Link></li>
                            <li><a href="">Nosotros</a></li>
                            <li><a href="">Contacto</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}