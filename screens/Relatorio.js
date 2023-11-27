import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Chart from '../components/Chart';

const Relatorio = (props) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Chart
            pessimoItem={props.route.params.pessimoItem}
            ruimItem={props.route.params.ruimItem}
            neutroItem={props.route.params.neutroItem}
            bomItem={props.route.params.bomItem}
            excelenteItem={props.route.params.excelenteItem}
        
        />
      </View>

      

      <View style={styles.grid}>
        <View style={styles.row}>
          <View
            style={[styles.square1, styles.square, styles.yellowSquare]}></View>
          <Text style={styles.label}>Excelente: {props.route.params.excelenteItem}</Text>
        </View>
        <View style={styles.row}>
          <View
            style={[styles.square, styles.square2, styles.blueSquare]}></View>
          <Text style={styles.label}>Bom: {props.route.params.bomItem}</Text>
        </View>
        <View style={styles.row}>
          <View
            style={[styles.square, styles.square3, styles.greenSquare]}></View>
          <Text style={styles.label}>Neutro: {props.route.params.neutroItem}</Text>
        </View>
        <View style={styles.row}>
          <View
            style={[styles.square, styles.square4, styles.redSquare]}></View>
          <Text style={styles.label}>Ruim: {props.route.params.ruimItem}</Text>
        </View>
        <View style={styles.row}>
          <View
            style={[
              styles.square,
              styles.square5,
              styles.lightBlueSquare,
            ]}></View>
          <Text style={styles.label}>Péssimo: {props.route.params.pessimoItem}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    
    backgroundColor: '#372775',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain', 
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10, 
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    
  },
  square1: {
    marginRight: 90, 
  },
  square2: {
    marginRight: 124, 
  },
  square3: {
    marginRight: 110, 
  },
  square4: {
    marginRight: 120, 
  },
  square5: {
    marginRight: 90, 
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10, 
  },
  yellowSquare: {
    backgroundColor: '#F1CE7E',
  },
  blueSquare: {
    backgroundColor: '#6994FE',
  },
  greenSquare: {
    backgroundColor: '#5FCDA4',
  },
  redSquare: {
    backgroundColor: '#EA7288',
  },
  lightBlueSquare: {
    backgroundColor: '#53D8D8',
  },
});

export default Relatorio;
