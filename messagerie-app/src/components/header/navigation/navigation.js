import React, {MouseEventHandler, useContext} from 'react'

import styles from './navigation.module.scss'
import {AppContext} from "../../../context/app-context";

const Navigation = ({realtors, realtor, onChange, history}) => {
    const [state] = useContext(AppContext);
    const defaultOptionSelected = state.location.realtorId

    const onRealtorChange = e => {
        const value = e.target.value;
        onChange(defaultOptionSelected);
        history.push('/')
        history.push(`${value}/`)
    };

    const realtorList = realtors.map(realtor => {
        return (
            <option key={realtor.id} value={realtor.id}>
                {realtor.name}
            </option>
        );
    });

    return (
        <nav className={styles.container} role="navigation">
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={`${realtor.logo}`} alt="logo agence"/>
            </div>
            <label className={styles.a11yVisibility} htmlFor="menu-realtors">Sélectionner une agence</label>
            <select
                id="menu-realtors"
                onChange={onRealtorChange}
                defaultValue={defaultOptionSelected}
            >
                {realtorList}
            </select>
        </nav>
    )
}

export default Navigation