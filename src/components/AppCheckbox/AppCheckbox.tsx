import React from "react"
import { Checkbox, CheckboxProps, FormControl, FormControlLabel, FormGroup, FormHelperText } from "@mui/material"
import clsx from "clsx"

interface AppCheckboxProps extends CheckboxProps {
  label?: string | number | React.ReactElement
  helperText?: string
  error?: boolean
}

function AppCheckbox(props: AppCheckboxProps) {
  const { id, className, error, helperText, label, ...rest } = props
  return (
    <FormControl id={id || "checkbox"} className={clsx(className)} error={error} onClick={(e) => e.stopPropagation()}>
      <FormGroup>
        <FormControlLabel control={<Checkbox {...rest} />} label={label || ""} />
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default AppCheckbox
