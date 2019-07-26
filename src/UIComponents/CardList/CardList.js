import React from "react";
import styles from "./CardList.module.css";

import Card from '../Card/Card';

const cardList = (props) => {
    let cardsList = props.cards.map((item) => {
        return (
            <div key={item.id} className={styles.CardWrapper}>
                <Card title={item.title} desc={item.desc} img={item.img}/>
            </div>
        )
            
    });
    return (
        <div className={styles.CardList}>
            {cardsList}
        </div>
    );
}
export default cardList;