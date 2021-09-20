import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';

const DietPlanScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <View>
          <Text style={styles.headerText}>Diet Plans</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <Image
            source={require('../assests/images/dietplan.jpg')}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.button_package}>
          <TouchableOpacity
            style={styles.package}
            onPress={() => navigation.navigate('MyDietPlansScreen')}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              style={styles.package}>
              <Text
                style={[
                  styles.textPackage,
                  {
                    color: colors.color5,
                  },
                ]}>
                My Diet Plans
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.package}
            onPress={() => navigation.navigate('RequestDietPlan')}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              style={styles.package}>
              <Text
                style={[
                  styles.textPackage,
                  {
                    color: colors.color5,
                  },
                ]}>
                Request Diet Plan
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('RequestedDietPlansScreen')}
            style={[
              styles.btn2,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                borderColor: colors.color3,
                borderWidth: 1,
              },
            ]}>
            <Text
              style={[
                styles.textbtn2,
                {
                  color: colors.color3,
                },
              ]}>
              Requested Diet Plans
            </Text>
          </TouchableOpacity>
        </View>
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
    // justifyContent: 'center',
    // alignItems: 'center',
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
  button_package: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 40,
  },
  package: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  textPackage: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  image: {
    height: 200,
    width: windowWidth,
  },
  btn2: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: -10,
  },
  textbtn2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 10,
  },
});

export default DietPlanScreen;
