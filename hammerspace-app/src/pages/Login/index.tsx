import React from 'react';
import { Container, Form } from './styles';
import CustomInput from '../../Components/Input';
import CustomButton from '../../Components/Button';
const Login = () => {
    return (
        <Container>
            <Form>
                <h1>Faça o seu Login</h1>
                <CustomInput/>
                <CustomInput/>
                <CustomButton/>
                <div>
                    <span>
                        Login failed, you already ready ?
                    </span>
                    
                    <a href='#'>emoji de merda</a>
                </div>
            </Form>
        </Container>       
    );
}

export default Login;