import React, {useEffect} from 'react';
import {ErrorMessage, Field, Form, Formik, useFormikContext} from 'formik';

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
                if (!values.file) {
                    errors.file = '';
                } else if (!/(pdf|zip|doc)$/ig.test(values.email)) {
                    errors.file = 'Only JPEG and PNG images please';
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
                <div className="fileStyling">
                    <Field name="file" id="file" type="file"/>
                    <label htmlFor="file">Choose a file</label>
                </div>
                <div className="Errors">
                    <ErrorMessage name="file"/>
                </div>
            </Form>
        </Formik>
    </div>
);

export default App;
