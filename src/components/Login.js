import React, { useState, useEffect } from 'react';
import styles from "./SignUp.module.css"
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import { Link } from 'react-router-dom';



const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "LOGIN"))
    }, [data, touched])

    const changHandler = event =>{
        if(event.target.name === "isAccepted"){
            setData({...data, [event.target.name]: event.target.checked})
        }else{
            setData({...data, [event.target.name]: event.target.value})
        }
    }

    const focusHandler = event =>{
        if(event.target.name !== "isAccepted"){
            setTouched({...touched, [event.target.name]: true}) 
        }
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("Login seccessfuly", "SUCCESS")
        }else{
            notify("Invalid data!", "ERROR")
            setTouched({
                email: true,
                password: true,
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>SignUp</h2>
                
                <div className={styles.formField}>
                    <label>Email</label>
                    <input 
                        className={errors.email && touched.email ? styles.unCompleted : styles.formInput}
                        type="text" 
                        name='email' 
                        value={data.email} 
                        onChange={changHandler} 
                        onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input 
                        className={errors.password && touched.password ? styles.unCompleted : styles.formInput}
                        type="password" 
                        name='password' 
                        value={data.password} 
                        onChange={changHandler} 
                        onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                
                <div className={styles.formButtons}>
                    <Link to="/signup">SignUp</Link>
                    <button type='submit'>Login</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Login;