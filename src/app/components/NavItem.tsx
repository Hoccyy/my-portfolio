"use client"
import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link';

const NavItem = ({
    title = '',
    path = '',
    desc = '',
}) => {

    return (
        <li id='menuItems'>
            <h3 id='navButtons' className={styles.listItemText}>
              <Link href={path} title={desc} passHref>
                {title}
              </Link>
            </h3>
          </li>
    );
};

export default NavItem;