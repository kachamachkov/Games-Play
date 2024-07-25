import { useState } from 'react';

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    // TODO: add checkbox forms support
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = () => {
        e.preventDefault();

        submitCallback(values);
    };

    return {
        values,
        changeHandler,
        submitHandler
    };
}                          