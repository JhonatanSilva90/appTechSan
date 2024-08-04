import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera } from '../camera/Camera';
import { Menu } from '../components/menu/menu';
import { NavigationBar } from '../components/navigationbar/navigationBar';
import { Overview } from '../overview/overview';
import { PendingBathrooms } from '../pendingServices/pendingBathrooms/PendingBathrooms';
import { PendingEffluents } from '../pendingServices/pendingEffluents/PendingEffluents';
import { PendingSignature } from '../pendingSignature/PendingSignature';
import { QrCode } from '../qrCode/QrCode';
import { BathroomCleaningOrder } from '../serviceOrders/bathroomCleaningOrder/bathroomCleaningOrder';
import { BathroomMaintenanceOrder } from '../serviceOrders/bathroomMaintenanceOrder/BathroomMaintenanceOrder';
import { EfluentSuctionOrder } from '../serviceOrders/efluentSuctionOrder/EfluentSuctionOrder';
import { BathroomMaintenance } from '../services/bathroomMaintenance/bathroomMaintenance';
import { CleaningBathrooms } from '../services/cleaningBathrooms/cleaningBathrooms';
import { EfluentSuction } from '../services/efluentSuction/efluentSuction';
import { BathroomsCarriedOut } from '../servicesPerformed/bathroomsCarriedOut/BathroomsCarriedOut';
import { SuctionsCarriedOut } from '../servicesPerformed/suctionsCarriedOut/SuctionsCarriedOut';
import { SignatureCapture } from '../components/signatureCapture/SignatureCapture';
import { ValidationServices } from '../components/validationServices/ValidationServices';

export const AppStack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Overview"
        component={Overview}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="CleaningBathrooms"
        component={CleaningBathrooms}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="EfluentSuction"
        component={EfluentSuction}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="BathroomMaintenance"
        component={BathroomMaintenance}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="BathroomCleaningOrder"
        component={BathroomCleaningOrder}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="EfluentSuctionOrder"
        component={EfluentSuctionOrder}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="BathroomMaintenanceOrder"
        component={BathroomMaintenanceOrder}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="PendingBathrooms"
        component={PendingBathrooms}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="PendingEffluents"
        component={PendingEffluents}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="SuctionsCarriedOut"
        component={SuctionsCarriedOut}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="BathroomsCarriedOut"
        component={BathroomsCarriedOut}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="NavigationBar"
        component={NavigationBar}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Camera"
        component={Camera}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="QrCode"
        component={QrCode}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="PendingSignature"
        component={PendingSignature}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="ValidationServices"
        component={ValidationServices}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="SignatureCapture"
        component={SignatureCapture}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
}
