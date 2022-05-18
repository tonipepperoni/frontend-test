import React from "react"
import { Box, Theme } from "@mui/material"
import landscapeImage from "../../assets/images/landscape.png"
import makeStyles from "@mui/styles/makeStyles"
import AppCheckbox from "../AppCheckbox/AppCheckbox"

interface SelectCardProps {
  isSelected: boolean
  onSelect: () => void
  width?: number
  height?: number
  borderRadius?: number
}

const defaultProps = {
  width: 229,
  height: 150,
  borderRadius: 10
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: SelectCardProps) => ({
    borderRadius: props.borderRadius,
    height: props.height,
    width: props.width,
    boxShadow: `0px 4px 4px ${theme.palette.grey[300]}`,
    border: `1px solid ${theme.palette.grey[200]}`,
    "&:hover": {
      cursor: "pointer",
      border: `1px solid ${theme.palette.primary.light}`,
      boxShadow: `0px 0px 0px 2px ${theme.palette.primary.light}`
    },
    ...(props.isSelected && {
      border: `1px solid ${theme.palette.primary.dark}`,
      boxShadow: `0px 0px 0px 2px ${theme.palette.primary.light}`,
      "&:hover": {
        cursor: "pointer",
        border: `1px solid ${theme.palette.primary.dark}`
      }
    })
  }),
  imageBlock: (props: SelectCardProps) => ({
    height: (props.height || defaultProps.height) - 52,
    width: (props.width || defaultProps.width) - 2
  }),
  image: (props: SelectCardProps) => {
    let borderRadiusValue = props.borderRadius === undefined ? defaultProps.borderRadius : props.borderRadius
    if (borderRadiusValue > 3) {
      borderRadiusValue = borderRadiusValue - 0.8
    }
    return {
      borderTopLeftRadius: borderRadiusValue,
      borderTopRightRadius: borderRadiusValue
    }
  },
  checkboxBlock: (props: SelectCardProps) => ({
    display: "flex",
    alignItems: "center",
    width: props.width,
    height: 50,
    padding: 8
  })
}))

export default function SelectCard(props: SelectCardProps) {
  const classes = useStyles(props)

  return (
    <Box className={classes.root} onClick={() => props.onSelect()}>
      <Box className={classes.imageBlock}>
        <img src={landscapeImage} alt="landscape" height="100%" width="100%" className={classes.image} />
      </Box>
      <Box className={classes.checkboxBlock}>
        <AppCheckbox label="Flood zone 3" checked={props.isSelected} size="small" onChange={() => props.onSelect()} />
      </Box>
    </Box>
  )
}

SelectCard.defaultProps = defaultProps
