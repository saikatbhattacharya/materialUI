import React from 'react';
import Paper from 'material-ui/Paper';
import VerticalLinearStepper from './resumeStepper.js';

const style = {
  height: 'auto',
  width: '97%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class Tab1 extends React.Component {
  render(){
    return(
        <Paper style={style} zDepth={2}>
          <VerticalLinearStepper/>
        </Paper>
    );
  }
};
