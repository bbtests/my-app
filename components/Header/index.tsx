import styles from './styles.module.scss'
import Link from "next/link";
import routes from "@/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import LogoComponent from "../LogoComponent";
import { useModal } from '../Modal';
import ResetModal from '@/app/auth/components/password/reset';

export default function Header() {

    const { handleShow, setModalHeader, setModalBody } = useModal();
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }

    const openForgotPassword = () => {
        setModalBody(<ResetModal onClick={handleShow} />);
        setModalHeader(<h3>Forgot Password BB</h3>);
        handleShow();
    }
    return <>
        <header className={`w-100 p-2vh p-7vw position-fixed`}>
            <nav className={`w-100 d-flex justify-content-between`}>
                <div>
                    <Link href="/">
                        <LogoComponent className="" />
                    </Link>
                </div>

                <button onClick={openForgotPassword}>forgot password</button>
                <div className="">
                    <div className="d-md-none text-end">
                        <FontAwesomeIcon className={`${styles.hamburger}`} onClick={toggle} icon={open ? faTimes : faBars} />
                    </div>
                    <ul className={`${open ? '' : 'd-none '}text-end d-md-flex align-items-center list-unstyled gap-20`}>
                        <li><Link href={routes.support.contact}>Packages</Link></li>
                        <li><Link href={routes.support.about}>Testimonial</Link></li>
                        <li><Link href={routes.auth.signin}>Offers</Link></li>
                        <li><Link className="btn btn-secondary" href={routes.auth.signup}>Sign Up</Link></li>
                        <li><Link className="btn bg-transparent border-secondary" href={routes.auth.signin}>Login</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
}