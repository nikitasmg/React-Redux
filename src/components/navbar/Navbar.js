import React from 'react';
import { Layout, Menu, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../reducers/todoSlice';

const Navbar = () => {
  const isAuth = useSelector((state) => state.todo.isAuth);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Layout.Header className='header'>
        <Row justify={'end'}>
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item key='1'>{isAuth ? 'LogOut' : 'LogIn'}</Menu.Item>
          </Menu>
        </Row>
      </Layout.Header>
    </Layout>
  );
};

export default Navbar;
