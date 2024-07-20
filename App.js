// import { Menu } from "./src/components/menu/menu.jsx";
// import { Login } from "./src/login/login.jsx";
// import { Overview } from "./src/overview/overview.jsx";
// import { CleaningBathrooms } from "./src/services/cleaningBathrooms/cleaningBathrooms.jsx";
// import { EfluentSuction } from "./src/services/efluentSuction/efluentSuction.jsx";
// import BathroomMaintenance from "./src/services/bathroomMaintenance/bathroomMaintenance.jsx";
// import { ServiceOrderHeader } from "./src/components/orderOfService/header/serviceOrderHeader.jsx";
// import { Logo } from "./src/components/logo/logo.jsx";
// import { ServiceOrderImage } from "./src/components/orderOfService/serviceOrderImage/serviceOrderImage.jsx";
import { BathroomCleaningOrder } from "./src/serviceOrders/bathroomCleaningOrder/bathroomCleaningOrder.jsx";
import { EfluentSuctionOrder } from "./src/serviceOrders/efluentSuctionOrder/EfluentSuctionOrder.jsx";
import { BathroomMaintenanceOrder } from "./src/serviceOrders/bathroomMaintenanceOrder/BathroomMaintenanceOrder.jsx";
import { ServiceIdentification } from "./src/components/serviceIdentification/ServiceIdentification";
import { PendingBathrooms } from "./src/pendingServices/pendingBathrooms/PendingBathrooms.jsx";
import { SuctionsCarriedOut } from "./src/servicesPerformed/suctionsCarriedOut/SuctionsCarriedOut.jsx";
import { BathroomsCarriedOut } from "./src/servicesPerformed/bathroomsCarriedOut/BathroomsCarriedOut.jsx";
import { TakePicture } from "./src/components/takePicture/TakePicture.jsx";
import { Camera } from "./src/camera/Camera.jsx";
import { Routes } from "./src/routes.js";
import { QrCode } from "./src/qrCode/QrCode.jsx";
import { ValidationServices } from "./src/components/validationServices/ValidationServices.jsx";
import { PendingSignature } from "./src/pendingSignature/PendingSignature.jsx";

export default function App() {
  return (
    <>
      {/* <PendingSignature /> */}
      {/* <ValidationServices /> */}
      {/* <QrCode /> */}
      {/* <Camera /> */}
      {/* <TakePicture /> */}
      {/* <SuctionsCarriedOut /> */}
      {/* <BathroomsCarriedOut /> */}
      {/* <PendingBathrooms /> */}
      {/* <OutstandingServices /> */}
      {/* <ServiceIdentification /> */}
      <Routes />
      {/* <BathroomMaintenanceOrder /> */}
      {/* <EfluentSuctionOrder /> */}
      {/* <BathroomCleaningOrder /> */}
      {/* <Login /> */}
      {/* <Overview /> */}
      {/* <CleaningBathrooms /> */}
      {/* <EfluentSuction /> */}
      {/* <BathroomMaintenance /> */}
      {/* <Menu /> */}
      {/* <Logo /> */}
    </>
  );
}
