import React from 'react'
import { useState } from 'react'

export default function useInput(initValue) {
    const [value, setValue] = useState(initValue);
    const [data, setData] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const confirm = () => {
        setData([...data, value]);
    }

    return {
        value,
        data,
        onChange: handleChange,
        confirm,
    }
}
