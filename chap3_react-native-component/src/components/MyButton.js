import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const myButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#3498db",
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => props.onPress()}
    >
      <Text
        style={{
          color: "white",
          fontSize: 24,
        }}
      >
        {props.children || props.title}
      </Text>
    </TouchableOpacity>
  );
};

myButton.defaultProps = {
  title: "Button",
};

myButton.propTypes = {
  // title: PropTypes.number, // Warning 발생
  title: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired, // Warning 발생
  onPress: PropTypes.func.isRequired,
};

export default myButton;
