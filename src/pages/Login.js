import React from 'react';
import Loginform from '../components/logInForm/LoginForm';
import Navbar from '../components/navbar/Navbar';
import { Layout, Menu, Row } from 'antd';

const Login = () => {
  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <Row justify='center' align='middle'>
          <Loginform />
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Login;
