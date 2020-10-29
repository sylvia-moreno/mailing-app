import React from 'react'

import Logo from './logo/logo'
import Menu from './menu/menu'
import Counter from './counter/counter'

import styles from './header.module.scss'

const Header = ({
  realtors,
  realtor,
  unReadMessage,
  onChange,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Logo />
                <Counter nbOfMessages={unReadMessage} />
            </div>
            <div className={styles.rigth}>
                <Menu realtors={realtors} realtor={realtor} onChange={onChange} />
            </div>
        </div>


    )
}

export default Header