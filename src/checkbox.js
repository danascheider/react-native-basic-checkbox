import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity, ViewPropTypes} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

const styles = {
  contentStyle: {
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 16,
    marginLeft: 3
  }
}

const iconStyles = {
  light: {
    checkedIcon: 'square-o',
    uncheckedIcon: 'check-square-o'
  },
  dark: {
    checkedIcon: 'square',
    uncheckedIcon: 'check-square'
  }
}

class CheckBox extends PureComponent {
  static propTypes = {
    style: ViewPropTypes.style,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    labelPosition: PropTypes.string,
    labelStyle: Text.propTypes.style,
    iconStyle: PropTypes.string,
    iconSize: PropTypes.number,
    checkedColor: PropTypes.string,
    uncheckedColor: PropTypes.string
  };

  static defaultProps = {
    style: {},
    checked: false,
    labelPosition: 'right',
    labelStyle: styles.labelStyle,
    iconStyle: 'light',
    iconSize: 30,
    checkedColor: '#464646',
    uncheckedColor: '#464646'
  };

  componentWillMount() {
    this.setState({
      checked: !this.props.checked
    });
  }

  componentWillReceiveProps(props) {
    this.setState({
      checked: !props.checked
    });
  }

  _onChange() {
    const newVal = !this.state.checked
    const { onChange } = this.props
    this.setState({checked: newVal}, () => {
      onChange(newVal)
    });
  }

  _renderIcon() {
    const { iconSize, iconStyle, checkedColor, uncheckedColor } = this.props
    const checked = this.state.checked
    
    return(
      <FontAwesome
        name={checked ? iconStyles[iconStyle].checkedIcon : iconStyles[iconStyle].uncheckedIcon}
        size={iconSize}
        color={checked ? checkedColor : uncheckedColor}
        style={iconStyle == 'light' ? 'regular' : 'solid'}
      />
    )
  }

  _renderContent() {
    const { labelPosition, labelStyle, label, iconStyle } = this.props
    const flexDirection = labelPosition == 'left' ? 'row-reverse' : 'row'

    return(
      <View style={[styles.contentStyle, { flexDirection }]}>
        {this._renderIcon.call(this)}
        {
          label ?
          <Text style={labelStyle}>{label}</Text>
          : null
        }
      </View>
    )
  }

  render() {
    const { style } = this.props
    return(
      <TouchableOpacity
        onPress={this._onChange.bind(this)}
        style={style}
      >
        {this._renderContent.call(this)}
      </TouchableOpacity>
    )
  }
}

export default CheckBox;