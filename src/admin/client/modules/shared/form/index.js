import React from 'react'
import Toggle from 'material-ui/Toggle';

export const CustomToggle = ({ input, label, className = '', disabled = false, style }) => (
  <Toggle
    label={label}
    toggled={input.value ? true : false}
    onToggle={input.onChange}
    className={className}
    disabled={disabled}
    style={style}
  />
)
