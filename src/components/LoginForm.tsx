import React from 'react'

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import FormInputText from './form-components/FormInputText';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputDropdown from './form-components/FormInputDropdown';


const validationSchema = yup.object({
    textValue: yup.string().required("Missing text value"),
    dropdownValue: yup.string().required("Missing dropdown value"),
  });


interface FormValues {
textValue: string;
dropdownValue:string;

}

function LoginForm() {




const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      textValue: "",
      dropdownValue: "",
    },
  });
  const onSubmit = (data: FormValues) => {
    console.log("onSubmit", data);
  };    


  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h4"> Some Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          name="textValue"
          control={control}
          label="Text Input"
          sx={{ mb: 2 }}
        />
        <FormInputDropdown
          name="dropdownValue"
          control={control}
          label="Dropdown Input"
          sx={{mb: 2}}
          options={[
            { label: "Dropdown Option 1", value: "1" },
            { label: "Dropdown Option 2", value: "2" },
          ]}
        />
        <Button
          type="submit"
          variant={"contained"}
          sx={{ mt: 2, display: "block" }}
        >
          Submit
        </Button>
      </form>
    </Paper>    
  )
}

export default LoginForm