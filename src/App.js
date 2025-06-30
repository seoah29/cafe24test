import React, { useState } from "react";
import "./App.css";

function App() {
  const [collarCode, setCollarCode] = useState("O000000E");
  const [sleeveCode, setSleeveCode] = useState("O000000D");
  const [buttonCode, setButtonCode] = useState("O000000C");

  const handleAddToCart = () => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://seoah29.cafe24.com/exec/front/order/basket/";
    form.target = "_blank";

    const productNoInput = document.createElement("input");
    productNoInput.name = "product_no";
    productNoInput.value = "10"; // 상품 번호
    form.appendChild(productNoInput);

    // 옵션 코드들 삽입
    [collarCode, sleeveCode, buttonCode].forEach((code) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "option_code[]";
      input.value = code;
      form.appendChild(input);
    });

    const qtyInput = document.createElement("input");
    qtyInput.name = "quantity";
    qtyInput.value = "1";
    form.appendChild(qtyInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <div className="App">
      <h1>셔츠 커스터마이징</h1>

      <div>
        <h3>카라</h3>
        <button onClick={() => setCollarCode("O000000E")}>기본 카라</button>
      </div>

      <div>
        <h3>소매</h3>
        <button onClick={() => setSleeveCode("O000000D")}>기본 소매</button>
      </div>

      <div>
        <h3>단추</h3>
        <button onClick={() => setButtonCode("O000000C")}>기본 단추</button>
      </div>

      <button onClick={handleAddToCart}>장바구니 담기</button>
    </div>
  );
}

export default App;
