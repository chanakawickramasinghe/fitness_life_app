import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../config/colors';

const ProfileScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Profile</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Welcome to Profile</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.color5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.color2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  body: {
    flex: 8,
    width: windowWidth,
    backgroundColor: colors.color5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: colors.color5,
    fontFamily: 'roboto',
  },
  bodyText: {
    fontSize: 24,
  },
});

export default ProfileScreen;
