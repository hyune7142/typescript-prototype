import React, { useEffect, useContext } from 'react';
import { HocProps, User } from '@@types/common';
import useForm from '@hooks/useForm';
import { AuthContext } from '@/containers/provider/AuthProvider';

const TestComp: React.FC<HocProps> = ({ flag = 'module', data = {}, config = {} }) => {
    const { refresh } = useContext(AuthContext)
    const { formData, setData } = useForm<User>({
        id: 'ROOT',
        token: 'something..',
        name: 'Admin',
    })

    useEffect(() => {
        console.debug('Flag =', flag);
        console.debug('Data =', data);
        console.debug('Config =', config);
    }, [])

    return (
        <div>
            Test Components
            <div>{`${formData.name}`}</div>
            <button onClick={refresh}>테스트</button>
        </div>
    );
};

export default TestComp;