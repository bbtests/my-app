'use client';
import Modal from 'react-bootstrap/Modal';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface ModalContextType {
    show: boolean;
    handleClose: () => void;
    handleShow: () => void;
    setModalHeader: Dispatch<SetStateAction<ReactNode>>;
    setModalBody: Dispatch<SetStateAction<ReactNode>>;
}


const ModalContext = createContext<ModalContextType | undefined>(undefined);

const AppModal = ({ children }: { children: ReactNode }) => {
    const [show, setShow] = useState(false);
    const [modalHeader, setModalHeader] = useState<ReactNode>(<></>);
    const [modalBody, setModalBody] = useState<ReactNode>(<></>);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <ModalContext.Provider value={{ show, handleClose, handleShow, setModalHeader, setModalBody }}>
        {children}
        <Modal show={show} onHide={handleClose} className="text-center">
            <Modal.Header closeButton>
                {modalHeader}
            </Modal.Header>
            <Modal.Body>
                {modalBody}
            </Modal.Body>
        </Modal>
    </ModalContext.Provider>;
}

export default AppModal