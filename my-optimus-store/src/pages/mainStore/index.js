import React from 'react';
import { NavLink } from 'react-router-dom';
import './main.css';
import Header from '../../components/Header';
import { Burguers } from '../../mocks/burguer';

const MainStore = () => {
  const renderList = () => {
    return Burguers.map(item => (
      <div className='li' key={item.id}>
        <div className='content'>{item.name}</div>
        <div className='content'>{item.description}</div>
        <div className='content'>
          <div className='box'>{item.value}</div>
          <div className='box'>
            <button className='btn'>-</button>
            {item.qtd}
            <button className='btn'>+</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='container'>
      <Header text='Optimus Burguer'>
        <NavLink key='right' to='/cart'>
          <button className='btnExit' onClick={() => console.log('saiu')}>
            child2
          </button>
        </NavLink>
      </Header>
      <div className='ul'>
        <div>
          <div className='li'>
            <div className='content'>Nome</div>
            <div className='content'>Descrição</div>
            <div className='content'>Valor</div>
          </div>
          {renderList()}
          <div className='li'>
            <div className='lastChild'></div>
            <div className='lastChild'>Total</div>
            <div className='lastChild'>xx</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStore;
