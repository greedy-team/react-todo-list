import React from 'react';
import { MainLayout } from './Main.styles';
import Todo from '../todo/Todo';

const Main = () => {
  return (
    <MainLayout>
      <Todo />
    </MainLayout>
  );
};

export default Main;
