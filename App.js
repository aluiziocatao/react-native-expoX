import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';

import Topo from './source/telas/Carrinho/Topo';
import Detalhes from './source/telas/Carrinho/Detalhes';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import Mocks from './source/mocks/carrinho';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if(!fontsLoaded){
    return <View></View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Topo {...Mocks.topo}/>
      <Detalhes {...Mocks.detalhes}/>

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
