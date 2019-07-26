import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../../UIComponents/CardList/CardList';
import styles from "./QuickAdd.module.css";
import QuickAddBar from '../QuickAddBar/QuickAddBar';
import Aux from '../../hoc/Aux'
import * as actions from '../../store/actions/index';



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
            <Aux>
                <div className={styles.CardList}>
                    <CardList cards={this.state.cards}/>
                </div>
                <QuickAddBar />
            </Aux>
        )
        return cardList;
        
    };
}

const mapStateToProps = state => {
    return {
        posts: state.quickAdd.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initLoadingPosts: () => dispatch(actions.initLoadingPosts())
    }
}


//ToDo add axios withError
export default connect(mapStateToProps, mapDispatchToProps)(QuickAdd);