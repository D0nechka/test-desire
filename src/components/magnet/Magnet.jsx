import React from 'react';

class Magnet extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: (child.props.className || '') + ' magnetizable'
      });
    });

    return (
      <>
      {childrenWithProps}
    </>
    );
  }
}

export default Magnet;