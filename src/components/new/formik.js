import React from 'react';
import {useFormik} from 'formik';

const InputFile = () => {
    const formik = useFormik({
        initialValues: {file: ''},
        validate: values => {
            const errors = {};
            console.log(values);
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: (values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="file"
                name="file"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.file}
            />
            {formik.errors.password && formik.touched.password && formik.errors.password}
        </form>
    )
}

export default InputFile;