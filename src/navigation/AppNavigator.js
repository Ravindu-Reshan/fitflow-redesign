import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import PlannerScreen from '../screens/PlannerScreen';
import ProgressScreen from '../screens/ProgressScreen';
import CommunityScreen from '../screens/CommunityScreen';
import NutritionScreen from '../screens/NutritionScreen';
import WorkoutDetailsScreen from '../screens/WorkoutDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import InfoScreen from '../screens/InfoScreen';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabIcons = {
  Home: 'home',
  Planner: 'barbell',
  Progress: 'trophy',
  Community: 'person',
  Nutrition: 'restaurant',
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 62,
          paddingTop: 6,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color }) => {
          const iconBase = tabIcons[route.name];
          const iconName = focused ? iconBase : `${iconBase}-outline`;
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Planner" component={PlannerScreen} options={{ tabBarLabel: 'Workout' }} />
      <Tab.Screen name="Progress" component={ProgressScreen} options={{ tabBarLabel: 'Progress' }} />
      <Tab.Screen name="Community" component={CommunityScreen} options={{ tabBarLabel: 'Community' }} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} options={{ tabBarLabel: 'Nutrition' }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.bg },
            headerTintColor: colors.text,
            headerTitleStyle: { fontWeight: '700' },
            contentStyle: { backgroundColor: colors.bg },
          }}>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} options={{ title: 'Workout Details' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Privacy" component={InfoScreen} initialParams={{ kind: 'privacy' }} options={{ title: 'Privacy Policy' }} />
          <Stack.Screen name="ReleaseNotes" component={InfoScreen} initialParams={{ kind: 'release' }} options={{ title: 'Release Notes' }} />
          <Stack.Screen name="Testing" component={InfoScreen} initialParams={{ kind: 'testing' }} options={{ title: 'Testing' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
