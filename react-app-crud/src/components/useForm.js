import React, { useState, useEffect } from 'react';

const initialFieldValues = {
    fullname: '',
    mobile: '',
    email: '',
    age: '',
    bloodGroup: '',
    address: '',
}

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    return {
        values, setValues, errors, setErrors, handleInputChange
    };
}

export default useForm;