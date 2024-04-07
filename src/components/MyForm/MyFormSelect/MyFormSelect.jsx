import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const MyFormSelect = ({ label, name, options, disabled, mode }) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col justify-center gap-1">
          <p className="ps-1">{label}</p>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Select mode={mode} style={{ width: "100%" }} {...field} options={options} size="large" disabled={disabled} />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        </div>
      )}
    />
  );
};

export default MyFormSelect;
