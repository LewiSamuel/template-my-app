import React from 'react'
import style from './aside.module.scss'
import Link from 'next/link'

export default function aside(){
    return(<aside className={style.aside}>
        <ul>
            <li>
                <ul className={style.submenu}>
                    <li>User</li>
                    <li>Save</li>
                    <li>Update</li>
                    <li>Delete</li>
                    <li><Link href="/admin/user/list">List</Link></li>
                </ul>
            </li>
            <li>
                <ul className={style.submenu}>
                    <li>Post</li>
                    <li>Save</li>
                    <li>Update</li>
                    <li>Delete</li>
                    <li>List</li>
                </ul>
            </li>
            <li>
                <ul className={style.submenu}>
                    <li>Categoria</li>
                    <li>Save</li>
                    <li>Update</li>
                    <li>Delete</li>
                    <li>List</li>
                </ul>
            </li>
        </ul>
    </aside>)
}