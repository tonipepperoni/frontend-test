import React, { useEffect, useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import AppCheckbox from "./AppCheckbox"

export default {
  title: "Checkbox",
  label: "Checkbox",
  component: AppCheckbox
} as ComponentMeta<typeof AppCheckbox>

const Template: ComponentStory<typeof AppCheckbox> = (args) => {
  const { label, error, helperText } = args
  const [value, setValue] = useState(false)

  useEffect(() => {
    setValue(!!args.checked)
  }, [args.checked])

  return <AppCheckbox checked={value} onChange={() => setValue(!value)} error={error} helperText={helperText} label={label} size="small" />
}

export const CheckboxExample = Template.bind({})
CheckboxExample.parameters = { controls: { include: ["isSelected", "label", "error", "helperText"] } }
CheckboxExample.args = {
  checked: false,
  label: "Label",
  error: false,
  helperText: ""
}
