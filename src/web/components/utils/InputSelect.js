import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import { Field } from 'formik'
import React from 'react'

export default function InputSelect({name, label, options}) {
    return <Field
        name={name}
    >
        {(props)=>{
            const {field, meta} =props
            return <>
                <FormControl sx={{ minWidth: 200 }}
                             error={meta.touched && meta.error}
                             fullWidth
                >
                    <Select
                        displayEmpty
                        value={field.value}
                        {...field}
                        sx={{
                            '& .MuiOutlinedInput-input': {
                                padding: '12px',
                            },
                        }}
                    >
                        {
                            options.map((option, index) =>{
                                return (
                                    <MenuItem key={index} value={option.value}>{option.key}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
                {meta.touched && meta.error?<FormHelperText style={{color:'red'}}>{meta.error}</FormHelperText>:null}
            </>
        }}
    </Field>
}