import React from 'react';
import Login from './Login';

export default {
  title: 'katkaun-components/components/Login',
  component: Login,
};

const Template = (args) => {
  const handleLogin = (username, password) => {
    console.log('Login attempted with:', username, password);
    // Här kan du hantera autentisering eller logik för inloggning.
  };

  return <Login {...args} onLogin={handleLogin} />;
};

export const Default = Template.bind({});
Default.args = {};