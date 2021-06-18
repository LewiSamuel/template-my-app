// imports resources
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// import style of component
import style from './admin.module.scss';

// import components
import Nav from '../../components/Nav';
import Aside from '../../components/admin/Aside';


// function component 
export default function Admin(){

// ######################################
//
//               COMPONENT BELLOW
return (
    <>
    {/* - * - * - * - * - * - *

        SET CONFIG PAGE
    */}
    <Head>
        <title>Lewix - Admin</title>
    </Head>
    <Nav />
    {/* - * - * - * - * - * - *
    */}
    <section className={style.bgForm}>
        
        <Aside />

    </section>
    </>
  );
}
