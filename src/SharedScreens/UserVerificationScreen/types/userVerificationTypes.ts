export type UserVerifyCardType = {
  verifiedUsers: {
    approvedUsers: number;
    pendingUsers: number;
  };
};

export type FetchRcDetailsType = {
  fitUpTo: string | null;
  registrationDate: string | null;
  ownerName: string | null;
  fatherName: string | null;
  presentAddress: string | null;
  permanentAddress: string | null;
  makerDescription: string | null;
  makerModel: string | null;
  fuelType: string | null;
  color: string | null;
  registeredAt: string | null;
};
