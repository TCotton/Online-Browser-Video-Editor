import React, {useEffect} from 'react';
import {ErrorMessage, Field, Form, Formik, useFormik, useFormikContext} from 'formik';

const Logger = () => {
    const formik = useFormikContext();
    React.useEffect(() => {
        console.group("Formik State");
        console.log("values", formik.values);
        console.log("errors", formik.errors);
        console.log("touched", formik.touched);
        console.log("isSubmitting", formik.isSubmitting);
        console.log("isValidating", formik.isValidating);
        console.log("submitCount", formik.submitCount);
        console.groupEnd();
    }, [
        formik.values,
        formik.errors,
        formik.touched,
        formik.isSubmitting,
        formik.isValidating,
        formik.submitCount
    ]);
    return null;
};

const AutoSubmit = () => {
    // Grab values and submitForm from context
    const {values, submitForm} = useFormikContext();
    useEffect(() => {
        if (values.file.length > 0) {
            submitForm().then((e) => {
                console.dir(e);
            });
        }
    }, [values, submitForm]);
    return null;
};

const App = () => (
    <div className="app">
        <Formik
            initialValues={{
                file: "",
            }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                return errors
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <Logger/>
                <Field name="file" type="file"/>
                <ErrorMessage name="file"/>
            </Form>
        </Formik>
    </div>
);

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
            {Logger()}
            {formik.errors.password && formik.touched.password && formik.errors.password}
        </form>
    )
}

export default App;
