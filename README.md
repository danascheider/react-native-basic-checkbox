# react-native-basic-checkbox
This package provides two checkbox styles, light and dark. The light style
uses the Font Awesome 4 `'square-o'` and `'check-square-o'` icons and the dark
style uses the `'square'` and `'check-square'` icons. This will be changed
when [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/)
adds support for Font Awesome 5, which uses separate fonts instead of different
icons for `'square'` and `'square-o'`.

## Usage

Run the following to add to your package.json file:
```
npm install simple-react-native-checkbox --save
```
Then, create your component:
```javascript
import React from 'react'
import { AppRegistry, View } from 'react-native'
import CheckBox from 'simple-react-native-checkbox'

export class CheckBoxWrapper extends React.Component {

  // Setting this to true will cause the checkbox to be
  // checked by default
  state = {checked: false}

  render() {
    return(
      <View>
        <CheckBox
          style={styles.checkbox}
          labelStyle={styles.checkboxLabel}
          label='Accept the terms of use'
          iconStyle='light'
          checked={this.state.checked}
          checkedColor='#000'
          uncheckedColor='#FF0000'
          onchange={() => this.setState({checked: !this.state.checked})}
        />
      </View>
    )
  }
}

const styles = {
  checkbox: {/* your styles here */},
  checkboxLabel: {/* your label styles here */}
}
```