import React, {useEffect} from 'react';
import {Field, Form, Formik, useFormikContext} from 'formik';
import {useDispatch} from "react-redux";
import db from '../indexDB';
import {add} from './slices/filesSlice'
import useLocalStorage from '../../hooks/useLocalStorage';



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
    const dispatch = useDispatch();
    const [fileObject, setFileObject] = useLocalStorage('fileObject', {});
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
                    } else if (!/([a-zA-Z0-9\s_\\.\-\(\):])+(.mp4|.wav|.mov|.webm|.ogg)$/ig.test(values.email)) {
                        errors.file = 'Please only add a video';
                    }
                    return errors;
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
                                    setFileObject();
                                    db.file.add(event.currentTarget.files[0])
                                    dispatch(add({
                                        lastModified: event.currentTarget.files[0].lastModified,
                                        name: event.currentTarget.files[0].name,
                                        size: event.currentTarget.files[0].size,
                                        type: event.currentTarget.files[0].type
                                    }));
                                }}/>
                                <label htmlFor="file">Choose a file</label>
                            </div>
                            <div className="Errors">{values.file.error}</div>
                        </Form>
                    )
                }}
            />
        </div>
    )
};

export default FileUpload;
