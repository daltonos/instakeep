import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../../UIComponents/CardList/CardList';
import styles from "./QuickAdd.module.css";
import QuickAddBar from '../QuickAddBar/QuickAddBar';
import Aux from '../../hoc/Aux'
import * as actions from '../../store/actions/index';



class QuickAdd extends Component {
    
    componentDidMount () {
        this.props.initLoadingPosts();
        //some comment
    }

    render () {
        let cardList = (
            <Aux>
                <div className={styles.CardList}>
                    <CardList cards={this.props.posts}/>
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
