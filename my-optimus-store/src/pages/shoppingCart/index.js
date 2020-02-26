import React, { useContext } from 'react';
import { ContextCart } from '../../context';
import Header from '../../components/Header';
import { NavLink } from 'react-router-dom';

const ShoppingCart = () => {
  const { itemsCart } = useContext(ContextCart);

  const renderList = () => {
    return itemsCart.map(item => (
      <div className='li' key={item.id}>
        <div className='content'>{item.name}</div>
        <div className='content'>{item.description}</div>
        <div className='content'>
          <div className='box'>{item.value}</div>
        </div>
      </div>
    ));
  };

  const sum = () => {
    let number = 0;
    itemsCart.map(item => {
      return (number = item.value + number);
    });
    return number;
  };

  return (
    <div className='container'>
      <Header text='Optimus Burguer'>
        <NavLink key='right' to='/'>
          <button className='btnExit'>Voltar</button>
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
          <div>Total do pedido: {sum()}</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
