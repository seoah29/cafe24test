import React, { useState } from "react";
import "./App.css";

function App() {
  const [collar, setCollar] = useState("collar1.png");
  const [sleeve, setSleeve] = useState("sleeve1.png");

  const handleAddToCart = () => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://seoah29.cafe24.com/exec/front/order/basket/";
    form.target = "_blank";

    const productNo = document.createElement("input");
    productNo.type = "hidden";
    productNo.name = "product_no";
    productNo.value = "10";
    form.appendChild(productNo);

    const option1 = document.createElement("input");
    option1.type = "hidden";
    option1.name = "option_code[]";
    option1.value = sleeve === "sleeve1.png" ? "O000000D" : "O000000E";
    form.appendChild(option1);

    const option2 = document.createElement("input");
    option2.type = "hidden";
    option2.name = "option_code[]";
    option2.value = collar === "collar1.png" ? "O000000C" : "O000000F";
    form.appendChild(option2);

    const quantity = document.createElement("input");
    quantity.type = "hidden";
    quantity.name = "quantity";
    quantity.value = "1";
    form.appendChild(quantity);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <div className="App">
      <h1>셔츠 커스터마이징</h1>

      {/* 이미지 겹치기 */}
      <div style={{ position: "relative", width: 300, height: 400 }}>
        <img
          src="/base_shirt.png"
          alt="Base"
          style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        />
        <img
          src={`/${collar}`}
          alt="Collar"
          style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        />
        <img
          src={`/${sleeve}`}
          alt="Sleeve"
          style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        />
      </div>

      <div>
        <h3>소매 선택</h3>
        <button onClick={() => setSleeve("sleeve1.png")}>긴소매</button>
        <button onClick={() => setSleeve("sleeve2.png")}>반소매</button>
      </div>
      <div>
        <h3>카라 선택</h3>
        <button onClick={() => setCollar("collar1.png")}>기본카라</button>
        <button onClick={() => setCollar("collar2.png")}>단추카라</button>
      </div>

      <div>
        <button onClick={handleAddToCart}>장바구니 담기</button>
      </div>
    </div>
  );
}

export default App;
