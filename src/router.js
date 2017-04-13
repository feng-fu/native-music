import { StackNavigator } from 'react-navigation'

import Main from './main'
import Player from './view/player'
import PlayerList from './view/playerlist'


const Router = StackNavigator({
    Home: {screen: Main},
    list: {
      path: 'list/:id',
      screen: PlayerList
    },
    Player: {screen: Player}
})

export default {
  Router
}