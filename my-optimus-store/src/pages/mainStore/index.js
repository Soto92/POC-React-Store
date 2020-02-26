import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './main.css';
import Header from '../../components/Header';
import { Burguers } from '../../mocks/burguer';
import {ContextCart } from '../../context';

const MainStore = () => {

  const {itemsCart, setItemsCart} = useContext(ContextCart);

  const renderList = () => {
    return Burguers.map(item => (
      <div className='li' key={item.id}>
        <div className='content'>{item.name}</div>
        <div className='content'>{item.description}</div>
        <div className='content'>
          <div className='box'>{item.value}</div>
          <div className='box'>
            <button onClick={() => setItemsCart(  [...itemsCart, item] )} className='btn'>Comprar</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='container'>
      <Header text='Optimus Burguer'>
        <NavLink key='right' to='/cart'>
          <button className='btnExit'>
            Carrinho
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
        </div>
      </div>
    </div>
  );
};

export default MainStore;
