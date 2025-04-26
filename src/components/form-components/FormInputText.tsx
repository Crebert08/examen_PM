import { TextField } from '@mui/material'
import React from 'react'
import {Controller} from "react-hook-form"
import { FormInputProps } from './FormInputProps'

const FormInputText = ({name, control, label, sx}: FormInputProps  ) => {
  return <Controller 
  name={name}
  control={control}
  render={(renderProps)=>  (
    <TextField 
        size='small'
        onChange={renderProps.field.onChange}
        value={renderProps.field.value}
        error={!!renderProps.fieldState.error}
        helperText={renderProps.fieldState.error?.message??null}
        fullWidth
        label={label}
        variant='outlined'
        sx={sx}
    />
  )}/>
}

export default FormInputText