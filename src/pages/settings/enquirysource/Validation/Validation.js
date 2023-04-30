import * as Yup from "yup";

export const ValidSchema = Yup.object({
  name: Yup.string().min(3).max(30).required("Please enter first Name*"),
  description: Yup.string().required("Please enter description*"),

});
