import * as Yup from "yup";

export const ValidSchema = Yup.object({
  
  firstname: Yup.string().min(3).max(30).required("Please enter first Name*"),
  lastname: Yup.string().max(30).required("Please enter last Name*"),
  email: Yup.string().email().required("Please enter email*"),
   mobile: Yup.string().required("Please enter phone number*"),
   enq_for: Yup.string().required("Please enter  *"),
   
});
