import * as Yup from "yup";

export const ValidSchema = Yup.object({
  name: Yup.string().min(1).max(30).required("Please enter the name"),
  password: Yup.string().min(8).required("Please enter password*"),
});
