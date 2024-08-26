'use client';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';


interface ModalContextType {
    show: boolean
    handleClose: () => void
    handleShow: () => void
    setOnClose: Dispatch<SetStateAction<() => void>>
    setModalContent: Dispatch<SetStateAction<JSX.Element>>
    setModalHeader: Dispatch<SetStateAction<JSX.Element>>
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState<JSX.Element>(<></>);
    const [modalHeader, setModalHeader] = useState<JSX.Element>(<></>);
    const [onClose, setOnClose] = useState<() => void>(() => { });
    const handleClose = () => {
        setModalContent(<></>);
        setModalHeader(<></>);
        setShow(false);
        onClose();
    };
    const handleShow = () => setShow(true);
    return (
        <ModalContext.Provider value={{ show, handleClose, handleShow, setModalContent, setModalHeader, setOnClose }}>
            {children}
            <Modal show={show} onHide={handleClose} className="text-center">
                <Modal.Header closeButton>
                    {modalHeader}
                </Modal.Header>
                <Modal.Body>
                    {modalContent}
                </Modal.Body>
            </Modal>
        </ModalContext.Provider>
    )
}

export default ModalProvider

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}