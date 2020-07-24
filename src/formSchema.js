import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is Required"),
  size: yup
    .string()
    .oneOf(['personal', 'small', 'medium', 'large', 'huge'], "Tell me how big!"),
  sauce: yup  
    .string()
    .oneOf(['marinara', 'alfredo', 'pesto', 'garlic oil', 'no sauce']), 
  toppings: yup
    .boolean()
    .oneOf([true], "Try some more toppings!"),
})

export default formSchema
