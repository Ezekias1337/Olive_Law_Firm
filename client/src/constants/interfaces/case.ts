export interface CaseCreationCredentials {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  preferredLanguage: string;
  dateOfIncident: string;
  treatmentStatus: string;
  incidentDescription: string;
}

export interface CaseReturnedFromDB {
  _id: string;
  __v: number;
  name: string;
  phoneNumber: string;
  emailAddress: string;
  preferredLanguage: string;
  dateOfIncident: string;
  treatmentStatus: string;
  incidentDescription: string;
  createdAt: string;
  updatedAt: string;
}
