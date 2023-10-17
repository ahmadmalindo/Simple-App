import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  marginTop: number;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3, marginTop: props.marginTop }} {...props} />;
}

function TabBarLabel(props : {
  tittle: string;
  color: string;
}) {
  return <Text style={{color: props.color}}>{props.tittle}</Text>
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {position: 'absolute', height: 90}
      }}
      initialRouteName='home'
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) =>  focused ? null : <TabBarLabel tittle='home' color={color}/>,
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="home" color={color} marginTop={focused ? 15 : 0}/>,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) =>  focused ? null : <TabBarLabel tittle='account' color={color}/>,
          tabBarIcon: ({ focused, color }) => <TabBarIcon name="child" color={color} marginTop={focused ? 15 : 0}/>,
        }}
      />
    </Tabs>
  );
}
