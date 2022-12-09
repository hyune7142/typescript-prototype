import React, { useEffect, useContext } from 'react';
import { HocProps } from '@@types/common';
import useForm from '@hooks/useForm';
import { AuthContext } from '@/containers/provider/AuthProvider';

const TestComp: React.FC<HocProps> = ({ flag = 'module', data = {}, config = {} }) => {
    const { refresh } = useContext(AuthContext)
    return (
        <div>
            Test Components
            <button onClick={refresh}>테스트</button>
        </div>
    );
};

export default TestComp;