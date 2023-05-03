import * as Yup from "yup";

export const ValidSchema = Yup.object({
  support_type: Yup.string().min(3).max(30).required("Please enter first Name*"),
  email: Yup.string().email().required("Please enter email*"),
  password: Yup.string().min(8).required("Please enter password*"),
  mobile: Yup.string().required("Please enter phone number*"),
});
