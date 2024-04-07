import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const MyFormInput = ({ type, name, label }) => {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState: { error }}) => (
          <div className="flex flex-col justify-center gap-1">
            <p className="ps-1">{label}</p>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Input {...field} type={type} id={name} size="large" />
            </Form.Item>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormInput;
