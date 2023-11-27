import {NavigationContainer} from "@react-navigation/native";

import StackRoute from "./Stack.routes";

export default function Routes(){
    return(
        <NavigationContainer>
            <StackRoute/>
        </NavigationContainer>
    )
}