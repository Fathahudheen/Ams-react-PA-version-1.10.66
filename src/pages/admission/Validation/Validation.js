import * as Yup from "yup";

export const ValidSchema = Yup.object({
  reg_no: Yup.string().required("Please enter phone register number*"),
  firstname: Yup.string().min(3).max(30).required("Please enter first Name*"),
  lastname: Yup.string().max(30).required("Please enter last Name*"),
  email: Yup.string().email().required("Please enter email*"),
   mobile_no: Yup.string().required("Please enter phone number*"),
   dob: Yup.string().required("Please enter date of birth*"),
   qualification: Yup.string().required("Please enter qualification*"),
   course_opted: Yup.string().required("Please enter course selected*"),
   guardian: Yup.string().required("Please enter guardian name*"),
   relationship: Yup.string().required("Please enter relationship*"),
   addline1: Yup.string().required("Please enter addline1*"),
   pincode: Yup.string().required("Please enter pincode*"),
   district: Yup.string().required("Please enter district*"),
   state: Yup.string().required("Please enter  state*"),
});
