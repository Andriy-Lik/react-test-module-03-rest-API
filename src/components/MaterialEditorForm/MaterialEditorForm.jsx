import { Formik, Form, Field }  from "formik";


export const MaterialEditorForm = ({ onSubmit, isSubmitting }) => {
    const handleSubmit = (values, actions) => {
        onSubmit(values);
        actions.resetForm();
    }

    return (
        <Formik 
            initialValues={{ title: '', link: '' }}
            onsubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label>
                        Описание
                        <Field name="title" type="text" />
                    </label>
                    <br/>
                    <label>
                        Ссылка
                        <Field name="link" type="text" />
                    </label>
                    <br/>
                    <button type="submit" disabled={isSubmitting}>
                        Добавить материал
                    </button>
                </Form>
            )}
            
        </Formik>
    );
};

// export default MaterialEditorForm;