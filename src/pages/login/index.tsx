// imports of structure
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// import style of component
import style from './register.module.scss';

// import model and controller of User
import UserControl from '../../controller/User';
import iUser from '../../models/User';
import Session from '../../lib/Session';

// function component 
export default function RegisterUser(){


    ///+* - * - * - * - * - * - *
    //
    //        SET STATE VARIABLES
    //
    const [ Email, setEmail ]       = useState<iUser["Email"]>("");
    const [ Password, setPassword ] = useState<iUser["Password"]>("");
    // utils
    const [ msgFeedback, setMsgFeedback ] = useState<any>({message:null})



    useEffect(() => {
        // let teste = 
        // console.log("teste - ", teste.teste())
    }, []);




    // - - -- --- -- - -- --- - - -- 
    //
    //       HANDLE SUBMIT FORM
    //
    const handleSubmit = async(e:any) => {
        e.preventDefault();
        var objUser:iUser = {
            Email: Email,
            Password: Password
        }
        // chama o metodo de auth de usuario
        // passando o objeto capturado do form
        const result = await UserControl.auth(objUser).then(result => { return result });
        Session.setAll(result.data)
        setMsgFeedback(result)
    }



// ######################################
//
//               COMPONENT BELLOW
return (
    <>
    {/* - * - * - * - * - * - *

        SET CONFIG PAGE
    */}
    <Head>
        <title>Lewix - Register</title>
    </Head>


    {/* - * - * - * - * - * - *

        BACKGROUND FORM
    */}
    <section className={style.bgForm}>

        {msgFeedback.message && <section className={style.msgFeedback}>{msgFeedback.message}</section>}

        {/* - - - FORM BG WHITE - - - */}
        <form
            className={style.formControl}
            onSubmit={handleSubmit}>
            

            {/* - * - * - * - * - * - *
                HEADER
            */}
            <div className={style.imageControl}>
                <Image
                    src="/fedora-hat.svg"
                    alt="Picture of the author"
                    width={100}
                    height={100} />
                <h1>
                    <b>Lewix - Register</b>
                </h1>
            </div>

            {/* - * - * - * - * - * - *
                BLOCK INPUT Email
            */}
            <div className={style.inputField}>
                <label htmlFor="inputEmail">Email</label>
                <input type="text" 
                className={style.inputControl}
                name="Email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Put Email here"/>
            </div>
             {/* - * - * - * - * - * - *
                BLOCK INPUT Password
            */}
            <div className={style.inputField}>
                <label htmlFor="inputPassword">Password</label>
                <input type="password" 
                className={style.inputControl}
                name="Password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Put Password here"/>
            </div>
           
            {/* - * - * - * - * - * - *
                BUTTON LOGIN
            */}
            <div className={style.imageControl}>
                <button className={style.btnRegister}>Login</button>
            </div>

        </form>
      </section>
    </>
  );
}
