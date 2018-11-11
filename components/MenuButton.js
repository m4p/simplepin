import React from 'react'
import {StyleSheet, TouchableOpacity, Image} from 'react-native'
import Base from 'app/assets/Base'

const MenuButton = ({navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.openDrawer()}
    >
      <Image source={require('app/assets/ic-menu.png')} style={styles.menuButton} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  menuButton: {
    marginHorizontal: 12,
    marginVertical: 8,
    tintColor: Base.colors.blue2,
  }
})

export default MenuButton
