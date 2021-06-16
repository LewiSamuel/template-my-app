// imports of structure
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// import style of component
import style from './register.module.scss';

// import model and controller of User
import User from '../../controller/User';
import iUser from '../../models/User';

// function component 
export default function RegisterUser(){


    ///+* - * - * - * - * - * - *
    //
    //        SET STATE VARIABLES
    //
    const [ Name, setName ]         = useState<iUser["Name"]>("");
    const [ Email, setEmail ]       = useState<iUser["Email"]>("");
    const [ Password, setPassword ] = useState<iUser["Password"]>("");
    const [ Telefone, setTelefone ] = useState<iUser["Telefone"]>("");
    const [ Obs, setObs ]           = useState<iUser["Obs"]>("");
    const [ DataNasc, setDataNasc ] = useState<iUser["DataNasc"]>("");
    const [ isAdmin, setisAdmin ]   = useState<iUser["isAdmin"]>("");
    const [ Linkedin, setLinkedin ] = useState<iUser["Linkedin"]>("");
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
            Name: Name,
            Email: Email,
            Password: Password,
            Telefone: Telefone,
            Obs: Obs,
            DataNasc: DataNasc,
            isAdmin: isAdmin,
            Linkedin: Linkedin
        }
        // cria uma instancia de usuario  
        var NewUser = new User();
        // chama o metodo de cadastro de usuario
        // passando o objeto capturado do form
        const result = await NewUser.register(objUser).then(result => { return result })
        setMsgFeedback(result)
        console.log("teste", result);
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
