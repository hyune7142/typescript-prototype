import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { User } from '@@types/common';
import useForm from '@hooks/useForm';


const Login = () => {
    const { formData, setData } = useForm<User>({userid: '', password: ''})

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if(name && value) {
            setData(name, value);
        }
    }

    const onSubmit = () => {
        alert(JSON.stringify(formData));
    }

    return (
        <React.Fragment>
            <div>Login Page Sample</div>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="userid"><FormattedMessage id="userID" /></label>
                        <input type="text" name="userid" autoComplete='on' onChange={onChange} />
                    </div>
                    <div>
                        <label htmlFor="password"><FormattedMessage id="userPW" /></label>
                        <input type="password" name="password" autoComplete='on' onChange={onChange} />
                    </div>
                    <button type='submit'><FormattedMessage id="Login" /></button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;