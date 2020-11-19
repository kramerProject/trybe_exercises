import React from 'react';

const Users = ({greetingMessage = 'Hi there'}) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage} this is my awesome Users component </p>
  </div>
);

export default Users;