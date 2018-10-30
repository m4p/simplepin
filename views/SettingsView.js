import React from 'react'
import {Text} from 'react-native'
import MenuButton from 'app/components/MenuButton'
import strings from 'app/assets/strings'

export default class SetingsView extends React.Component {
  static navigationOptions = ({navigation}) => {
    const type = navigation.getParam('type', 1)
    return {
      title: strings.menu.settings,
      headerLeft: (
        <MenuButton navigation={navigation} />
      )
    }
  }

  render() {
    return (
      <Text>Settings!</Text>
    )
  }
}