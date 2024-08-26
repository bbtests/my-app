'use client';
import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import Modal from 'react-bootstrap/Modal';


export enum ModalActionTypes {
    SHOW_MODAL = 'SHOW_MODAL',
    HIDE_MODAL = 'HIDE_MODAL',
    SET_MODAL_CONTENT = 'SET_MODAL_CONTENT',
    SET_MODAL_HEADER = 'SET_MODAL_HEADER',
    SET_ON_CLOSE_CALLBACK = 'SET_ON_CLOSE_CALLBACK',
}

type ModalAction =
    | { type: ModalActionTypes.SHOW_MODAL }
    | { type: ModalActionTypes.HIDE_MODAL }
    | { type: ModalActionTypes.SET_MODAL_CONTENT, payload: JSX.Element }
    | { type: ModalActionTypes.SET_MODAL_HEADER, payload: JSX.Element }
    | { type: ModalActionTypes.SET_ON_CLOSE_CALLBACK, payload: (() => void) | undefined };

interface ModalContextType {
    state: ModalState;
    dispatch: Dispatch<ModalAction>;
}

interface ModalState {
    show: boolean;
    modalContent: JSX.Element;
    modalHeader: JSX.Element;
    onClose?: () => void;
}

const initialState: ModalState = {
    show: false,
    modalContent: <></>,
    modalHeader: <></>,
    onClose: undefined,
};

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
    switch (action.type) {
        case ModalActionTypes.SHOW_MODAL:
            return { ...state, show: true };
        case ModalActionTypes.HIDE_MODAL:
            return { ...state, show: false, modalContent: <></>, modalHeader: <></> };
        case ModalActionTypes.SET_MODAL_CONTENT:
            return { ...state, modalContent: action.payload };
        case ModalActionTypes.SET_MODAL_HEADER:
            return { ...state, modalHeader: action.payload };
        case ModalActionTypes.SET_ON_CLOSE_CALLBACK:
            return { ...state, onClose: action.payload };
        default:
            return state;
    }
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);
    const { modalContent, modalHeader, onClose, show } = state;
    const handleClose = () => {
        if (onClose) onClose();
        dispatch({ type: ModalActionTypes.HIDE_MODAL });
    };


    return (
        <ModalContext.Provider value={{ state, dispatch }}>
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