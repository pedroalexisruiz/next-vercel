import React from 'react'
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/pricing' },
  ]
  return (
    <nav className={styles.nav}>
      {menuItems.map((item, index) => (
        <ActiveLink key={index} href={item.path}>
          {item.name}</ActiveLink>
        ))}
    </nav>
  )
}