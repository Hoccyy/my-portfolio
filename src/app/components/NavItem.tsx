"use client"
import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


type Props = {
    placeHolder?: string
};

const buttonContent = '⬆';
let selected = false;

const NavItem = ({
    title = '',
    path = '',
    active = false
}) => {

    return (
        <li id='menuItems'>
            <h3 id='navButtons' className={styles.listItemText}>
              <Link href={path} title='Some of my work' passHref>
                {title}
              </Link>
            </h3>
          </li>
    );
};

export default NavItem;