import { API } from "../../../Core/url";
import { AddEmployeeType } from "../Hooks/AddEmployeModal.hook";

export const addEmployeeApi = async (employeeData: AddEmployeeType) => {
  try {
    const res = await API.patch("/manager/add-employee", employeeData);
    return res.data?.newEmployee as AddEmployeeType;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
};

export const getAllEmployeeApi = async () => {
  try {
    const res = await API.get("/manager/employee");
    return res.data?.employees as AddEmployeeType[];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
};
