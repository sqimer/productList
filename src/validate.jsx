export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "This field in required";
  } else if (!/^[a-zA-Z ]+$/.test(values.name)) {
    errors.name = "Only letters allowed";
  }
  if (!values.phone) {
    errors.phone = "This field in required";
  } else if (!/^\d+$/.test(values.phone)) {
    errors.phone = "Only numbers allowed";
  } else if (values.phone.length < 12) {
    errors.phone = "Should contain 12 characters";
  }
  return errors;
}
