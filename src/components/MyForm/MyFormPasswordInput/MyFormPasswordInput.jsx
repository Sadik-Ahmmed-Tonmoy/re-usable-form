import { Form, Input } from "antd";
import { useEffect, useState } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

const MyFormPasswordInput = ({ type, name, label, onValueChange, matchWith }) => {
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);
  const { control } = useFormContext();

  const matchWithValue = useWatch({
    control: control,
    matchWith,
  });
  const inputValue = useWatch({
    control: control,
    name,
  });

  useEffect(() => {
    if (matchWith) {
      if (inputValue == matchWithValue[matchWith]) {
        setIsPasswordMatched(true);
      } else {
        setIsPasswordMatched(false);
      }
    }
  }, [inputValue]);

  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue]);

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col justify-center gap-1">
            <p className="ps-1">{label}</p>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Input.Password {...field} type={type} id={name} size="large" />
            </Form.Item>
            {
        error && <small style={{ color: "red" }}>{error.message}</small>
      }
          </div>
        )}
      />
      
        {matchWith && (
            <div>
            <small style={{ color: isPasswordMatched ? "green" : "red" }}>
                {isPasswordMatched ? "Password matched" : "Password not matched"}
            </small>
            </div>
        )}
    </div>
  );
};

export default MyFormPasswordInput;
