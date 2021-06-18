// imports resources
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// import style of component
import style from './userList.module.scss';

// import components
import Nav from '../../../../components/Nav';
import Aside from '../../../../components/admin/Aside';
import User from '../../../../controller/User';


// function component 
export default function UserList(){

    const [ list, setList ] = useState<any>([]);

    useEffect(() => {
        User.list({}).then(result => {
            setList(result.data)
        }).catch(console.log)
    }, []);

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
    <section className={style.container}>
        
        <Aside />
        <main>
            <h1>List users</h1>
            <table className={style.tableStyle}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Obs</th>
                        <th>DataNasc</th>
                        <th>isAdmin</th>
                        <th>Linkedin</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((userElement:any) =>
                    <tr key={userElement._id}>
                        <td>{userElement.Name}</td>
                        <td>{userElement.Email}</td>
                        <td>{userElement.Telefone}</td>
                        <td>{userElement.Obs}</td>
                        <td>{userElement.DataNasc}</td>
                        <td>{userElement.isAdmin}</td>
                        <td>{userElement.Linkedin}</td>
                    </tr>)}
                    
                </tbody>
            </table>
        </main>

    </section>
    </>
  );
}
