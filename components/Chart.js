import React from 'react';
import {View,Text} from 'react-native'
import {PieChart} from 'react-native-svg-charts'

export default function Chart(props){
const cores =['#F1CE7E','#6994FE','#5FCDA4','#EA7288','#53D8D8']
const data = [props.excelenteItem,props.bomItem,props.neutroItem,props.ruimItem,props.pessimoItem];
const pieData = data.map((value,index)=>({
    value,
    key:`${index}-${value}`,
    svg:{
        fill:cores[index]
    }
    
}));


    return(
        <View style={{height:'100%',width:'80%'}}>
            <PieChart style={{height:400}} data={pieData}/>    
        </View>
    );
};