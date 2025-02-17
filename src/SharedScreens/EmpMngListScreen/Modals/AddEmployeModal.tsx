import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import ModalLayout from "../../../Layout/ModalLayout";
import Input from "../../../features/auth/Components/Input";
import { useAddEmployeModalHook } from "../Hooks/AddEmployeModal.hook";
import Select from "../../../SharedComponents/Select";
import Button from "../../../SharedComponents/Button";

const AddEmployeModal = () => {
  const { isDisplayModal } = useSelector(
    (state: RootState) => state.modalSlice
  );

  const {
    employeeData,
    handleInputChange,
    errors,
    roles,
    handleSubmitForm,
    handleClearForm,
  } = useAddEmployeModalHook();

  return (
    <>
      {isDisplayModal && (
        <ModalLayout
          title="Add Employee"
          width="58%"
          height="80%"
          clearFormData={handleClearForm}
        >
          <div className="w-full flex flex-wrap gap-4 justify-center items-center">
            <Input
              label="User Name"
              type="text"
              name="userName"
              value={employeeData.userName}
              onChange={handleInputChange}
              placeholder="Enter your username"
              isValid={errors?.userName?.length > 0 ? true : false}
            />
            <Input
              label="Date of Birth"
              type="date"
              name="dob"
              value={employeeData.dob}
              onChange={handleInputChange}
              placeholder="Enter your date of birth"
              isValid={errors?.dob?.length > 0 ? true : false}
            />
            <Input
              label="Email"
              type="text"
              name="email"
              value={employeeData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              isValid={errors?.email?.length > 0 ? true : false}
            />
            <Select
              label="Assign Role"
              name="role"
              value={employeeData.role}
              onChange={handleInputChange}
              options={roles}
              isValid={errors?.role?.length > 0 ? true : false}
            />
            <Input
              label="User Id"
              type="text"
              name="userId"
              value={employeeData.userId}
              onChange={handleInputChange}
              placeholder="Enter your User ID"
              isValid={errors?.userId?.length > 0 ? true : false}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={employeeData?.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              isValid={errors?.password?.length > 0 ? true : false}
            />
            <Button
              text="Clear"
              width="330px"
              onClick={handleClearForm}
              bgColor="#fff"
              textColor="#e02e88"
              isApplyBorderStyle={true}
            />
            <Button
              text="Submit"
              width="330px"
              onClick={handleSubmitForm}
              isLoading={false}
            />
          </div>
        </ModalLayout>
      )}
    </>
  );
};

export default AddEmployeModal;
