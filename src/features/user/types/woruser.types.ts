// export interface WorUser {
//   docsNumber: {
//     newAadharNumber: string | null;
//     newPanNumber: string | null;
//     newRcNumber: string | null;
//     newLicenNumber: string | null;
//     dob: string | null;
//   };
//   adminDocsVerified: {
//     adminAadharVerified: string;
//     adminLicenVerified: string;
//     adminRcVerified: string;
//   };
//   activeService: string;
//   _id: string;
//   name: string;
//   mobile: string;
//   role: string;
//   onDuty: boolean;
//   holdingCaptain: boolean;
//   profilePic: string | null;
//   license: string | null;
//   licenseBack: string | null;
//   pan: string | null;
//   panBack: string | null;
//   adhar: string | null;
//   adharBack: string | null;
//   rc: string | null;
//   rcBack: string | null;
//   captainVehicleType: string | null;
//   aadharCardDetails: {
//     fullName: string;
//     dob: string;
//     gender: string;
//     aadhaarNumber: string;
//     careOf: string | null;
//     address: {
//       country: string;
//       dist: string;
//       state: string;
//       mandal: string;
//       village: string;
//       house: string;
//       _id: string;
//     };
//     aadharImage: string;
//   };
//   aadharCarVerificaation: boolean;
//   panCardVerified: boolean;
//   panCardDetails: {
//     pan: string | null;
//     name: string | null;
//     firstName: string | null;
//     middleName: string | null;
//     lastName: string | null;
//     gender: string | null;
//     dob: string | null;
//   };
//   licenseCardVerified: boolean;
//   licenseCardDetails: {
//     license_number: string | null;
//     state: string | null;
//     name: string | null;
//     permanent_address: string | null;
//     temporary_address: string | null;
//     dob: string | null;
//   };
//   captainLocation: {
//     type: string;
//     coordinates: [number, number]; // Tuple for latitude and longitude
//   };

//   email: string | null;
//   signUpDateAndTime: Date;
//   address: string | null;
//   fbtoken: string | null;
//   userVerified: boolean;
//   emergencyContact: {
//     name: string | null;
//     mobile: string | null;
//     option: string[];
//     _id: string;
//   }[];
//   vehicleName: string | null;
//   vehicleNumber: string | null;
//   rcCardVerified: boolean;
//   rcNumber: string | null;
//   rcCardDetails: {
//     type: {
//       rc_number: string | null;
//       owner_name: string | null;
//       permanent_address: string | null;
//       present_address: string | null;
//       maker_model: string | null;
//       color: string | null;
//       registered_at: string | null;
//     };
//   };
// }

export interface WorUser {
  _id: string;
  name: string;
  mobile: string;
  role: string;
  onDuty: boolean;
  holdingCaptain: boolean;
  profilePic: string | null;
  license: string | null;
  licenseBack: string | null;
  pan: string | null;
  panBack: string | null;
  adhar: string | null;
  adharBack: string | null;
  rc: string | null;
  rcBack: string | null;
  userVerified: boolean;
  emergencyContact: {
    name: string | null;
    mobile: string | null;
    option: string[];
    _id: string;
  }[];
  docsNumber: {
    newAadharNumber: string | null;
    newPanNumber: string | null;
    newRcNumber: string | null;
    newLicenNumber: string | null;
    dob: string | null;
  };
  adminDocsVerified: {
    adminAadharVerified: string;
    adminLicenVerified: string;
    adminRcVerified: string;
  };
}
