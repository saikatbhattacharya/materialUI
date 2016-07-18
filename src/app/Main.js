/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500, blue900, teal50} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabsHead from './tabHead.js';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: blue900,
    canvasColor:teal50,
  },
});

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <TabsHead />
      </MuiThemeProvider>
    );
  }
}

export default Main;
