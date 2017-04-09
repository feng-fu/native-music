import { Navigation } from 'react-native-navigation'

import Component1 from './../view/app'
import Component2 from './../view/index'

export function registerScreens () {
  Navigation.registerComponent('example.app', ()=> Component1)
  Navigation.registerComponent('example.index', ()=> Component2)  
}