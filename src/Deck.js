import React, { Component } from 'react';
import { 
  View, 
  Animated,
  PanResponder 
} from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder };
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }
  
  render() {
    return (
      <View {...this.state.panResponder.panHandlers}>
        {this.renderCards()}
      </View>
    );
  }
}

export default Deck;