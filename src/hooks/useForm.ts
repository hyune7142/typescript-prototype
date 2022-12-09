import { useState, useCallback } from 'react';
import { debounce } from 'lodash';

export default function useForm<T>(init: T) {
    const [formData, setFormData] = useState<T>(init);

    const setData = useCallback((key: string, value: any) => {
        setFormData(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }, [init]);

    const reset = useCallback(() => {
        setFormData({
            ...init,
        })
    }, [init])

    return {
        formData,
        setData: debounce(setData, 200),
        resetData: reset,
    }
}