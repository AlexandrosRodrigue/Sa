import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feed from './pages/Feed'
import Cadastro from './pages/Cadastro'
import Perfil from './pages/Perfil'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){

    return(
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                    
                tabBarStyle:{
                    
                    position:'absolute',
                    backgroundColor:'#000027',
                    borderTopWidth: 0,

                    height:'12%',
                }    
            }}
        >
            <Tab.Screen 
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({color,size,focused}) => {
                        if(focused){
                            return <Ionicons name='bookmarks-outline' size={55} color={'#ffa500'}/>
                        }
                        return <Ionicons name='bookmarks-outline' size={50} color={'#b87e14'}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Cadastro" 
                component={Cadastro} 
                options={{
                    tabBarIcon: ({color,size,focused}) => {
                        if(focused){
                            return <Ionicons name='create-outline' size={55} color={'#ffa500'}/>
                        }
                        return <Ionicons name='create-outline' size={50} color={'#b87e14'}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Perfil" 
                component={Perfil}
                options={{
                    tabBarIcon: ({color,size,focused}) => {
                        if(focused){
                            return <Ionicons name='person-outline' size={55} color={'#ffa500'}/>
                        }
                        return <Ionicons name='person-outline' size={50} color={'#b87e14'}/>
                    }
                }}
            />
        </Tab.Navigator>
        )

}