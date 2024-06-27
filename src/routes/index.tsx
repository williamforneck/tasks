import { AppRoutes } from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
