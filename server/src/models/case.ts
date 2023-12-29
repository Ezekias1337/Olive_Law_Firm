import { InferSchemaType, model, Schema } from "mongoose";

const caseSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    preferredLanguage: { type: String, required: true },
    dateOfIncident: { type: String, required: true },
    treatmentStatus: { type: String, required: true },
    incidentDescription: { type: String, required: true },
    caseStatus: {
      type: ["Pending Approval", "Approved", "Rejected"],
      required: true,
    },
  },
  { timestamps: true }
);

type Case = InferSchemaType<typeof caseSchema>;

export default model<Case>("Case", caseSchema);
