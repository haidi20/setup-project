import React, {useState, useEffect} from 'react';

// support
import axios from '../../supports/axios';
import {alert, handleError} from '../../supports/helper';
import {
    required
} from '../../supports/validation';

// components
import Form from '../_components/Form';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/input/style/css';
import { Input, Row, Col, Layout } from 'antd';

const { Content }   = Layout;

const login = () => {
    const nameRoute = '/login';
    const [state, setState] = useState({
        name: null,
        password: null,
    });
    const [loading, setLoading] = useState(false);

    const rules = {
        name: [required],
        password: [required],
    }

    const onSubmit = e => {
        console.log(e);

        axios({
            method: 'post',
            url: '/auth/login',
            data: {name: state.name, password: state.password},
        }).then(response => {
            console.log(response);
            setTimeout(() => {
                setLoading(false);
            }, 3000)
        }).catch(function (error) {
            console.log(error);
            setLoading(false);
        });
    }

    const attributeForm = {
        state: state,
        rules: rules,
        hideBack: true,
        loading: loading,
        setLoading: setLoading,
        // back: nameRoute,
        onSubmit:e => onSubmit(e),
    }

    const handleOnChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });      
    }

    const styled = {
        layoutLogin: {
            paddingTop: 50,
        }
    }

    return (
        <Row gutter={24}>
            <Col md={8}></Col>
            <Col xs={24} md={8}>
                <Content style={styled.layoutLogin}>
                    <div className="site-layout-background" >
                        <h1>Login</h1>
                        <Form {...attributeForm} >
                            <Input name="name" label="Username" onChange={handleOnChange} value={state.name}/>
                            <Input type="password" name="password" label="Password" onChange={handleOnChange} value={state.password}/>
                        </Form>
                    </div>
                </Content>
            </Col>
        </Row>
    );
};

export default login;