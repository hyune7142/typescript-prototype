import { useState, useCallback } from 'react';

export default function useForm<T>(init: T) {
    const [formData, setFormData] = useState<T>(init);

    const setData = useCallback((key: string, value: any) => {
        setFormData(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }, [formData]);

    return {
        formData,
        setData
    }
}