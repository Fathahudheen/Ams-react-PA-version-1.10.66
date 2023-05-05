import * as Yup from "yup";

export const ValidSchema = Yup.object({
  name: Yup.string().min(3).max(30).required("Please enter  Name*"),
  desc: Yup.string().required("Please enter description*"),
});
