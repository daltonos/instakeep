import React, { Component } from 'react';

import CardList from '../../UIComponents/CardList/CardList';
import styles from "./QuickAdd.module.css";

class QuickAdd extends Component {
    state = {
        cards: [
            {id: 0, title: "Card 1", desc: "Something I need to remember 1"},
            {id: 1, title: "Cat", desc: "A small kitten", img: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MzAvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzExMTA1NzIxNTkuanBn"},
            {id: 2, title: "Card 3", desc: "Something I need to remember 3"},
            {id: 3, title: "Card 4", desc: "Something I need to remember 4"},
        ]
    };
    render () {
        let cardList = (
                <div className={styles.CardList}>
                    <CardList cards={this.state.cards}/>
                </div>
            )
        return cardList;
        
    };
}
export default QuickAdd;