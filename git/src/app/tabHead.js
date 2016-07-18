import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Tab1 from './tab1.js';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10,
  },
};

export default class TabsHead extends React.Component {

  state={
    slideIndex: 0,
    margin:0
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div >
        <Tabs
          className="tabbackground"
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Home" value={0} />
          <Tab label="Myself" value={1} />
          <Tab label="My Career" value={2} />
          <Tab label="My Contacts" value={3} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Tab1/>
          </div>
          <div style={styles.slide}>
            slide 2
          </div>
          <div style={styles.slide}>
            slide 3
          </div>
          <div style={styles.slide}>
            slide 4
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
