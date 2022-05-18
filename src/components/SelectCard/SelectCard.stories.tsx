import React, { useEffect, useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import SelectCard from "./SelectCard"

export default {
  title: "Select card",
  label: "Select card",
  component: SelectCard
} as ComponentMeta<typeof SelectCard>

const Template: ComponentStory<typeof SelectCard> = (args) => {
  const { width, height, borderRadius } = args
  const [value, setValue] = useState(false)

  useEffect(() => {
    setValue(args.isSelected)
  }, [args.isSelected])

  return <SelectCard isSelected={value} onSelect={() => setValue(!value)} width={width} height={height} borderRadius={borderRadius} />
}

export const SelectCardExample = Template.bind({})
SelectCardExample.parameters = { controls: { include: ["isSelected", "height", "width", "borderRadius"] } }
SelectCardExample.args = {
  isSelected: false,
  height: 150,
  width: 229,
  borderRadius: 10
}
