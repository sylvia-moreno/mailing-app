import React, {MouseEventHandler} from 'react'

import styles from './menu.module.scss'

interface MenuPropsType {
    realtors: string[],
    realtor: string[],
    onChange(): MouseEventHandler
}

const Menu = ({realtors, realtor, onChange}: MenuPropsType) => {
    const onRealtorChange = e => {
        onChange(e.target.value);
    };

    const realtorList = realtors.map(realtor => {
        return (
            <option key={realtor.id} value={realtor.id}>
                {realtor.name}
            </option>
        );
    });

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={`${realtor.logo}`} alt="logo agence"/>
            </div>
            <label className={styles.a11yVisibility} htmlFor="menu-realtors">Sélectionner une agence</label>
            <select
                id="menu-realtors"
                onChange={onRealtorChange}
            >
                {realtorList}
            </select>
        </div>
    )
}

export default Menu