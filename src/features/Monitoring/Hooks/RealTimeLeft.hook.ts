import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";

export const useRealTimeLeftHook = () => {
  const { activeorder } = useSelector((state: RootState) => state.activeorders);
  const [activeService, setActiveService] = useState<
    { _id: string; service: { rcNumber: string; serviceType: string } }[]
  >([]);
  //   console.log("activeorder", activeorder);

  useEffect(() => {
    if (!activeorder) return;

    let actServ = activeorder
      .map((each) => {
        const service = each.acceptCaptain?.services?.find(
          (serv) => serv.serviceType === each.acceptCaptain.activeService
        );

        if (each.acceptCaptain?._id && service) {
          return {
            _id: each.acceptCaptain._id,
            service: service,
          };
        }
        return null;
      })
      .filter(Boolean); // Removes `null` values

    // console.log("actServ", actServ);
    setActiveService(actServ);
  }, [activeorder]);

  const vehicleNumber = (id: string) => {
    return activeService?.find((serv) => serv._id === id)?.service.rcNumber;
  };

  return {
    activeorder,
    vehicleNumber,
  };
};
