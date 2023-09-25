import { Checkbox, FormControlLabel } from '@mui/material'
import { Field } from 'formik'
import React from 'react'

export default function InputCheckBox({name}) {
    return <Field name={name}>
        {(props)=>{
            const {field, meta } =props
            return <FormControlLabel control={
                <Checkbox
                    {...field}
                    value={field.value}
                />
            } label="Se souvenir de moi" />
        }}
    </Field>
}