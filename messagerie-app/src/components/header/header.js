import React from 'react'

import Logo from './logo/logo'
import Navigation from './navigation/navigation'
import Counter from './counter/counter'

import styles from './header.module.scss'

const Header = ({
  realtors,
  realtor,
  unReadMessage,
  onChange,
  history,
}) => {
    return (
        <header className={styles.container} role="banner">
            <div className={styles.left}>
                <Logo />
                <Counter nbOfMessages={unReadMessage} />
            </div>
            <div className={styles.rigth}>
                <Navigation realtors={realtors} realtor={realtor} onChange={onChange} history={history}/>
            </div>
        </header>


    )
}

export default Header