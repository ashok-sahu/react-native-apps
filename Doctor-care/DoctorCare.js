import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import BottomTab from './components/BottomTab';
import BackgroundHeader from './components/BackgroundHeader';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const App = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BackgroundHeader style={[tab == 0 ? styles.bg : styles.bg1]} />
        <ScrollView style={styles.scrollView}>
          {tab == 0 && <HomeScreen />}
          {tab == 1 && <SearchScreen />}
        </ScrollView>
        <BottomTab selected={tab} onSelected={index => setTab(index)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F1F2',
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250,
  },
  bg1: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 280,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;
