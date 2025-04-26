import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export interface FormInputProps{
  name: string;
  control: any;
  label: any;
  setValue?: any;
  sx?: SxProps<Theme>;
}