import { Fragment, useEffect, useState } from 'react';
import classes from './navbar.module.scss';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';

const Navbar = () => {
  const navigationLink = [
    {
      id: 1,
      text: 'Home',
      href: '/',
    },
    { id: 2, text: 'Category', href: '/category' },
    { id: 3, text: 'Contact', href: '/contact' },
    { id: 4, text: 'About', href: '/about' },
  ];
  return (
    <Fragment>
      <nav className={classes['container']}>
        <div className={classes['container-inner']}>
          <ReactSVG src='/images/Peter.svg' className={classes['container-logo']} />
          <div className={classes['container-link__wrap']}>
            {navigationLink.map((e) => {
              return (
                <Link key={e.id} className={classes['container-link__text']} href={e.href}>
                  {e.text}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
