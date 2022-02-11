import React from 'react';
import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router';

const Loginform = () => {
  const [name, setName] = useState('asdasd');
  const [password, setPassword] = useState('asdasd');

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password } = values;
    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((data) => {
        if (
          data.find((el) => el.name === username && el.password === password)
        ) {
          console.log('succes');
        } else {
          console.log('succes');
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='basic'
      autoComplete='off'
      style={{ marginTop: 40 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input value='nikita' onChange={(e) => setName(e.target.value)} />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Loginform;
