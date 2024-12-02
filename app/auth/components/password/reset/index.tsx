"use client";
import ResetIcon from "@/app/auth/components/ResetIcon";
import Image from "next/image";
import styles from '../password.module.scss';
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ResetModal = ({ onClick }: { onClick: () => void }) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('email is required'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState: { errors }, watch } = useForm(formOptions);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit((data) => console.log(data))();
    };

    const [checkError, setCheckError] = useState(true);
    const checkErrorMessage = () => {
        if (errors.email?.message == undefined) {
            setCheckError(false);
        } else {
            setCheckError(true);
        }
    }
    return (
        <>
            <div className="d-flex justify-content-around align-content-center p-2 p-md-3 p-lg-5">
                <div>
                    <div><ResetIcon className="" /></div>
                    <div>
                        <p className="fs-2">Password Reset</p>
                        <p>Enter your Email and click on the link provided<br />or write the code here</p>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="input-group border-primary">
                            <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                <Image src="/emailIcon.svg" width={30} height={30} alt="password Icon" />
                            </span>
                            <input type="email" className={`${styles.input} form-control border-primary text-lg-center`} id="Email" {...register('email')} placeholder="johnkentacad@gmail.com" aria-label="Email address" onBlur={checkErrorMessage} required autoFocus />
                        </div>
                        <div className='text-danger mb-5'>{errors.email && <p>{errors.email.message}</p>}</div>
                        <div className="">
                            <div className={`${styles.link} text-secondary`} onFocus={checkErrorMessage} onBlur={checkErrorMessage} >click here to validate code</div>
                            <button disabled={!!Object.keys(errors).length} className={`btn btn-primary ${styles.btn}`} onClick={onClick}>Enter</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default ResetModal;