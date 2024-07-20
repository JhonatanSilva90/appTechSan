import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./login/login.jsx";
import { Overview } from "./overview/overview.jsx";
import { CleaningBathrooms } from "./services/cleaningBathrooms/cleaningBathrooms.jsx";
import { EfluentSuction } from "./services/efluentSuction/efluentSuction.jsx";
import { BathroomMaintenance } from "./services/bathroomMaintenance/bathroomMaintenance.jsx";
import { BathroomCleaningOrder } from "./serviceOrders/bathroomCleaningOrder/bathroomCleaningOrder.jsx";
import { EfluentSuctionOrder } from "./serviceOrders/efluentSuctionOrder/EfluentSuctionOrder.jsx";
import { BathroomMaintenanceOrder } from "./serviceOrders/bathroomMaintenanceOrder/BathroomMaintenanceOrder.jsx";
import { PendingBathrooms } from "./pendingServices/pendingBathrooms/PendingBathrooms.jsx";
import { PendingEffluents } from "./pendingServices/pendingEffluents/PendingEffluents.jsx";
import { SuctionsCarriedOut } from "./servicesPerformed/suctionsCarriedOut/SuctionsCarriedOut.jsx";
import { BathroomsCarriedOut } from "./servicesPerformed/bathroomsCarriedOut/BathroomsCarriedOut.jsx";
import { NavigationBar } from "./components/navigationbar/navigationBar.jsx";
import { PendingSignature } from "./pendingSignature/PendingSignature.jsx";
import { Menu } from "./components/menu/menu.jsx";
import { Camera } from "./camera/Camera.jsx";
import { QrCode } from "./qrCode/QrCode.jsx";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Overview"
          component={Overview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CleaningBathrooms"
          component={CleaningBathrooms}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EfluentSuction"
          component={EfluentSuction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BathroomMaintenance"
          component={BathroomMaintenance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BathroomCleaningOrder"
          component={BathroomCleaningOrder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EfluentSuctionOrder"
          component={EfluentSuctionOrder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BathroomMaintenanceOrder"
          component={BathroomMaintenanceOrder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PendingBathrooms"
          component={PendingBathrooms}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PendingEffluents"
          component={PendingEffluents}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuctionsCarriedOut"
          component={SuctionsCarriedOut}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BathroomsCarriedOut"
          component={BathroomsCarriedOut}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NavigationBar"
          component={NavigationBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QrCode"
          component={QrCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PendingSignature"
          component={PendingSignature}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
