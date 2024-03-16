import React from 'react';
import LoginForm from '~/components/loginForm';

const Login = () => {
    return (
        <div className='mt-8'>
            <div className='max-w-md mx-auto pt-4'>
                <h3 className='text-3xl font-semibold text-center'>Đăng nhập</h3>
                <div className='mt-8'>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
