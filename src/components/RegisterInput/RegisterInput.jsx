import React from 'react';
import styles from '../RegisterInput/RegisterInput.module.css';


const RegisterInput = ({name, children, label, required, type, placeholder, validationSchema, errors, register }) => {
    return (
        <>
            <div className={styles.registerForminput}>
            <label htmlFor={name}>
                {label}
                {required}
            </label>
            <input className={styles.registerFormInputTekst}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                {...register(name, validationSchema)}
            />
                {errors && errors[name]?.type === "required" && (
                    <span className={styles.errorsTekst}>{errors[name]?.message}</span>
                )}
                {errors && errors[name]?.type === "pattern" && (
                    <span className={styles.errorsTekst}>{errors[name]?.message}</span>
                )}
                {errors && errors[name]?.type === "minLength" && (
                    <span className={styles.errorsTekst}>{errors[name]?.message}</span>
                )}
            </div>
        </>
    );
};

export default RegisterInput;