import {createSwitchNavigator, createAppContainer} from 'react-navigation';


import copy from '../components/start/copy';
import Sc2 from '../components/start/Sc2';

import Login from '../components/login/Login';
import Registrasi from '../components/regis/Registrasi';
import Sc3 from '../components/start/Sc3';
import Home from '../components/Home/Home';




const App = createSwitchNavigator({
    copy:{screen: copy},
    Sc2:{screen: Sc2},
    Sc3:{screen: Sc3},
    Login: {screen: Login},
    Registrasi: {screen: Registrasi},
    Home:{screen: Home}
});



export default createAppContainer(App);
