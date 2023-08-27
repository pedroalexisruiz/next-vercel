import Link from 'next/link'
import React from 'react'
import styles from './ActiveLink.module.css'
import { useRouter } from 'next/router'

interface ActiveLinkProps {
    href: string
    children: React.ReactNode
    }
export const ActiveLink = ({ href, children }:ActiveLinkProps) => {
  const {asPath} = useRouter();
  return (
    <Link href={href} className={asPath === href ?styles.link__active: styles.link}>
      {children}
    </Link>
  )
}

