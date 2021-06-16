// imports of structure
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';


// import style of component
import style from './register.module.scss';

import iUser from '../../models/User';
import UserRegister from '../../controller/User/register';


// function component 
export default function Home(){


    ///+* - * - * - * - * - * - *
    //
    //        SET STATE VARIABLES
    //
    const [ Name, setName ]         = useState<any>();
    const [ Email, setEmail ]       = useState<any>();
    const [ Password, setPassword ] = useState<any>();
    const [ Telefone, setTelefone ] = useState<any>();
    const [ Obs, setObs ]           = useState<any>();
    const [ DataNasc, setDataNasc ] = useState<any>();
    const [ isAdmin, setisAdmin ]   = useState<any>();
    const [ Linkedin, setLinkedin ] = useState<any>();




    useEffect(() => {
        // let teste = 
        // console.log("teste - ", teste.teste())
    }, []);




    // - - -- --- -- - -- --- - - -- 
    //
    //       HANDLE SUBMIT FORM
    //
    const handleSubmit = (e:any) => {
        e.preventDefault();
        
        var objUser:iUser = {
            Name: Name,
            Email: Email,
            Password: Password,
            Telefone: Telefone,
            Obs: Obs,
            DataNasc: DataNasc,
            isAdmin: isAdmin,
            Linkedin: Linkedin
        }
            
        var userRegister = new UserRegister();
        console.log(userRegister.register(objUser));
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
                BLOCK INPUT NAME
            */}
            <div className={style.inputField}>
                <label htmlFor="inputName">Name</label>
                <input type="text" 
                className={style.inputControl}
                name="Name"
                onChange={e => setName(e.target.value)}
                placeholder="Put Name here"/>
            </div>
            
            {/* - * - * - * - * - * - *
                BLOCK INPUT EMAIL
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
                BLOCK INPUT PASSWORD
            */}
            <div className={style.inputField}>
                <label htmlFor="inputPassword">Password</label>
                <input type="text" 
                className={style.inputControl}
                name="Password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Put Password here"/>
            </div>

            {/* - * - * - * - * - * - *
                BLOCK INPUT TELEFONE
            */}
            <div className={style.inputField}>
                <label htmlFor="inputTelefone">Telefone</label>
                <input type="text" 
                className={style.inputControl}
                name="Telefone"
                onChange={e => setTelefone(e.target.value)}
                placeholder="Put Telefone here"/>
            </div>

            {/* - * - * - * - * - * - *
                BLOCK INPUT EMAIL
            */}
            <div className={style.inputField}>
                <label htmlFor="inputObs">Obs</label>
                <input type="text" 
                className={style.inputControl}
                name="Obs"
                onChange={e => setObs(e.target.value)}
                placeholder="Put Obs here"/>
            </div>

            
            {/* - * - * - * - * - * - *
                BLOCK INPUT DATANASC
            */}
            <div className={style.inputField}>
                <label htmlFor="inputDataNasc">DataNasc</label>
                <input type="text" 
                className={style.inputControl}
                name="DataNasc"
                onChange={e => setDataNasc(e.target.value)}
                placeholder="Put DataNasc here"/>
            </div>

            
            {/* - * - * - * - * - * - *
                BLOCK INPUT ISADMIN
            */}
            <div className={style.inputField}>
                <label htmlFor="inputisAdmin">isAdmin</label>
                <input type="text" 
                className={style.inputControl}
                name="isAdmin"
                onChange={e => setisAdmin(e.target.value)}
                placeholder="Put isAdmin here"/>
            </div>

            
            {/* - * - * - * - * - * - *
                BLOCK INPUT LINKEDIN
            */}
            <div className={style.inputField}>
                <label htmlFor="inputLinkedin">Linkedin</label>
                <input type="text" 
                className={style.inputControl}
                name="Linkedin"
                onChange={e => setLinkedin(e.target.value)}
                placeholder="Put Linkedin here"/>
            </div>

            
            {/* - * - * - * - * - * - *
                BUTTON CADASTRAR
            */}
            <div className={style.imageControl}>
                <button className={style.btnRegister}>Cadastrar</button>
            </div>

        </form>
      </section>
    </>
  );
}
