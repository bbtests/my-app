import styles from './styles.module.scss'
import Link from "next/link";
import routes from "@/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import LogoComponent from "../LogoComponent";
import { ModalActionTypes, useModal } from "@/components/Modal";



const modalHeader = <>Language Academy</>;
const modalContent = <>Welcome to Language Academy</>;

export default function Header() {
    const { dispatch } = useModal();
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    const onClose = () => console.log("Modal closed!")
    const handleShowed = () => {
        dispatch({ type: ModalActionTypes.SET_MODAL_HEADER, payload: modalHeader });
        dispatch({ type: ModalActionTypes.SET_MODAL_CONTENT, payload: modalContent });
        dispatch({ type: ModalActionTypes.SET_ON_CLOSE_CALLBACK, payload: onClose });
        dispatch({ type: ModalActionTypes.SHOW_MODAL });
    }
    return <>
        <header className={`w-100 p-2vh p-7vw position-fixed`}>
            <nav className={`w-100 d-flex justify-content-between`}>
                <div>
                    <Link href="/">
                        <LogoComponent className="" />
                    </Link>
                </div>
                <div className="">
                    <div className="d-md-none text-end">
                        <FontAwesomeIcon className={`${styles.hamburger}`} onClick={toggle} icon={open ? faTimes : faBars} aria-label="Toggle navigation menu" />
                    </div>
                    <ul className={`${open ? '' : 'd-none '}text-end d-md-flex align-items-center list-unstyled gap-20`}>
                        <li><Link href={routes.support.contact}>Packages</Link></li>
                        <li><button onClick={handleShowed} >Contact</button></li>
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