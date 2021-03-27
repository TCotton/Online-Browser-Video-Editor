import React, {useState} from 'react';
import {Field, Form, Formik, useFormikContext} from 'formik';
import db from '../indexDB/indexDB';
import dbVF from "../indexDB/indexDBVideo";
import {useLiveQuery} from "dexie-react-hooks";

//TODO: make sure file is only for development

export const dex = {
    dexieRun: (files) => {
        db.file.clear();
        db.file.add(files);
    },
    dexieRunVideo: (file) => {
        dbVF.videofile.clear();
        dbVF.videofile.add(file);
    }
}

const FileUpload = () => {
    //if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-unused-vars
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
    //}

    return (
        <div className="app">
            <Formik
                initialValues={{
                    file: "",
                }}
                validate={values => {
                    const errors = {};
                    console.dir(values);
                    if (!values.file) {
                        errors.file = '';
                    } else if (!(/\.(mp4|wav|mov|webm|ogg|avi|mpg|mpeg|m4v)$/i).test(values.file)) {
                        errors.file = 'Please only add a video';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
                render={({values, handleSubmit}) => {
                    return (
                        <Form onSubmit={handleSubmit} data-testid="form">
                            <div className="fileStyling">
                                <Field name="file" id="file" type="file" data-testid="file" required accept="video/*" onChange={(event) => {
                                    dex.dexieRun(event.currentTarget.files[0]);
                                    const file = {
                                        lastModified: event.currentTarget.files[0].lastModified,
                                        name: event.currentTarget.files[0].name,
                                        size: event.currentTarget.files[0].size,
                                        type: event.currentTarget.files[0].type
                                    }
                                    dex.dexieRunVideo(file);
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
