
import React, { useState } from 'react';

const App = () => {
  const [selectedCollar, setSelectedCollar] = useState('basic');

  const getImage = () => {
    switch (selectedCollar) {
      case 'button':
        return '/images/collar-button.png';
      default:
        return '/images/collar-basic.png';
    }
  };

  const handleCart = () => {
    const shopId = 'yourshop'; // 너의 Cafe24 shop ID로 바꾸세요
    const productNo = 123;     // 상품 번호로 바꾸세요
    const url = `https://${shopId}.cafe24.com/exec/front/Order/cart/?command=add&product_no=${productNo}&quantity=1&option1=${selectedCollar}`;
    window.location.href = url;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>셔츠 커스터마이징</h2>
      <img src={getImage()} alt="Shirt Preview" width="300" />
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setSelectedCollar('basic')}>기본 카라</button>
        <button onClick={() => setSelectedCollar('button')}>단추 카라</button>
      </div>
      <button style={{ marginTop: '20px' }} onClick={handleCart}>장바구니 담기</button>
    </div>
  );
};

export default App;
