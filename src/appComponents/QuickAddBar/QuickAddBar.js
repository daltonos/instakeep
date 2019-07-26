import React, { Component }  from "react";

import Aux from '../../hoc/Aux'
import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';

/*const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
        height: "2em"
    }
}));*/


class QuickAddBar extends Component {
    state = {
        hasSomething: false,
        textToAdd: ''
    }

    handleChange = ({ target }) => {
        console.log("handling change", target.value);
        this.setState({
            hasSomething: target.value ? true : false,
            textToAdd: target.value
        });
    };

    handleDone = () => {
        console.log("Will save ", this.state.textToAdd);
    };

    render () {
        return (
            <Aux>
                <div>
                    <input placeholder="something" onChange={this.handleChange} value={this.state.textToAdd}></input>
                    <Button color="primary">
                        Add Picture
                    </Button>
                </div>
                {this.state.hasSomething ? (<div>
                    <Button color="secondary" onClick={this.handleDone}>
                        Done
                    </Button>
                </div>) : null}
            </Aux>
        );
    }
}

export default QuickAddBar;