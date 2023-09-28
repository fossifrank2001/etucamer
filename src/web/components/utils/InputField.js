import { InputAdornment, TextField } from '@mui/material'
import { Field } from 'formik'
import React from 'react'
import { inputProps } from './function'

export default function InputField({name, label, type, handleOpenPopper, icon, required, isDisabled=false}) {
    return  <Field name={name}>
        {(props)=>{
            const {field, meta } =props
            return <TextField
                size="small"
                error={meta.touched && meta.error}
                helperText={`${meta.touched && meta.error? meta.error : ''}`}
                sx={{ borderRadius: '30px' }}
                label={label}
                type={type}
                {...field}
                value={field.value}
                fullWidth
                disabled={isDisabled}
                InputProps={{
                    startAdornment: (
                        <>
                            {icon ? <>
                                <InputAdornment position="start">
                                    {icon}
                                </InputAdornment>
                                <span
                                    style={{
                                        borderRight: '1px solid #ccc',
                                        height: 24,
                                        margin: '0 8px',
                                    }}
                                ></span>
                            </>:null
                            }
                        </>
                    ),
                    ...(meta.touched && meta.error
                        ? { ...inputProps(handleOpenPopper) }
                        : {}),
                }}
                required={required}
            />
        }}
    </Field>
}