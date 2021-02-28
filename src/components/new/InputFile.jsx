import React, {useEffect, useReducer} from 'react';
import {Field, Form, Formik, useFormikContext} from 'formik';
import {fileReducer} from '../../reducers/fileReducer';

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


const FileUpload = () => {
    const [{file}, dispatch] = useReducer(fileReducer ,{file: null});

    return (
        <div className="app">
            <Formik
                initialValues={{
                    file: "",
                }}
                validate={values => {
                    const errors = {};
                    if (!values.file) {
                        errors.file = '';
                    } else if (!/(png|jpeg|jpg)$/ig.test(values.email)) {
                        errors.file = 'Only JPEG and PNG images please';
                    }
                    return errors
                }}
                onSubmit={(values, {setSubmitting}) => {
                    alert('yes');
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
                render={({values, handleSubmit}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Logger/>
                            <div className="fileStyling">
                                <Field name="file" id="file" type="file" onChange={(event) => {
                                    console.dir(event.currentTarget.files[0]);
                                    dispatch({type: 'add', payload: event.currentTarget.files[0]});
                                }}/>
                                <label htmlFor="file">Choose a file</label>
                            </div>
                            <div className="Errors">
                                {values.file.error}
                            </div>
                        </Form>
                    )
                }}
            />
        </div>
    )
};

export default FileUpload;
