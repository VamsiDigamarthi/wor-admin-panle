import { useEffect, useState } from "react";
import { AddEmployeeType } from "./AddEmployeModal.hook";
import { getAllEmployeeApi } from "../services/addEmpServices";

export const useEmpMngListScreenHook = () => {
  const [empList, setEmpList] = useState<AddEmployeeType[]>([]);

  const fetchAllEmps = async () => {
    const empList = await getAllEmployeeApi();
    if (!empList) return;
    setEmpList(empList);
  };

  useEffect(() => {
    fetchAllEmps();
  }, []);

  return { empList };
};
