import * as Yup from "yup";

export const ValidSchema = Yup.object({
  crs_name: Yup.string().min(1).max(30).required("Please enter first Name*"),
  crs_ctgry: Yup.string().required("Please enter course category*"),
  duration: Yup.string().required("Please enter duration*"),
  crs_dscrp: Yup.string().required("Please enter description*"),
});
