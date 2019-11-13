import React from 'react';
import Button from '../components/Button';
import Input from '../components/IconInput';

const Prueba = () => (
  <div style={{ marginLeft: '10px' }}>
    <br />
    <div style={{ width: '500px' }}>
      <Button to='/' primary>Hola</Button>
    </div>
    <br />
    <div style={{ width: '500px' }}>
      <Button onClick={() => { console.log('hola'); }} primary>Hola</Button>
    </div>
    <br />
    <div style={{ width: '500px' }}>
      <Button to='/' secondary>Hola</Button>
    </div>
    <br />
    <div style={{ width: '500px' }}>
      <Button onClick={() => { console.log('hola'); }} secondary>Hola</Button>
    </div>
    <br/>
    <br />
    <div style={{ width: '500px' }}>
      <Button to='/' primary outlined>Hola</Button>
    </div>
    <br />
    <div style={{ width: '500px' }}>
      <Button onClick={() => { console.log('hola'); }} primary outlined>Hola</Button>
    </div>
    <br />
    <div style={{ width: '500px' }}>
      <Button to='/' secondary outlined>Hola</Button>
    </div>
    <br />
    <div style={{ width: '500px' }}>
      <Button onClick={() => { console.log('hola'); }} secondary outlined>Hola</Button>
    </div>
    <br />
    <div style={{ width: '500px' }}>
      <Input icon='fas fa-search' placeholder='search' />
    </div>
  </div>
);

export default Prueba;
