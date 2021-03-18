import React from "react";
import { Field, useField } from "formik";

function InputField(props) {
  const [field, meta] = useField(props);
  const { error, touched } = meta;

  return (
    <div className="form-group my-2">
      <Field
        {...field}
        {...props}
        placeholder={props.placeholder}
        className={`form-control ${touched && error ? "is-invalid" : ""}`}
      />
      {meta.error && meta.touched && (
        <div className="invalid-feedback">{error}</div>
      )}
    </div>
  );
}

export default InputField;
