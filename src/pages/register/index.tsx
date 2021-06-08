import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import style from './register.module.scss'

export default function Home(){

  useEffect(() => {
  }, []);

  return (
    <>
      <Head>
        <title>Lewix - Register</title>
      </Head>

      <div className={style.bgForm}>

            <form className={style.formControl}>

                <div className={style.imageControl}>
                    <Image
                        src="/fedora-hat.svg"
                        alt="Picture of the author"
                        width={100}
                        height={100}
                    />
                    <h1>
                        <b>Lewix - Register</b>
                    </h1>
                </div>

                <div className={style.inputField}>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className={style.inputControl}
                        placeholder="Put nome here" />
                </div>
                <div className={style.inputField}>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className={style.inputControl}
                        placeholder="Put nome here" />
                </div>
                <div className={style.inputField}>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className={style.inputControl}
                        placeholder="Put nome here" />
                </div>
                <div className={style.inputField}>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className={style.inputControl}
                        placeholder="Put nome here" />
                </div>
                <div className={style.inputField}>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className={style.inputControl}
                        placeholder="Put nome here" />
                </div>

                <div className={style.imageControl}>
                    <button className={style.btnRegister}>Cadastrar</button>
                </div>
            </form>

      </div>
    </>
  );
}
