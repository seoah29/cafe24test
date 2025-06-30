import { useState } from "react";

function App() {
  const [collar, setCollar] = useState("default");
  const [sleeve, setSleeve] = useState("default");
  const [button, setButton] = useState("default");

  const getImage = (part, value) => {
    if (value === "default") return null;
    return `/images/${part}${value}.png`;
  };

  return (import React, { useState } from "react";
import "./App.css";

function App() {
  const [collar, setCollar] = useState("O000000C");
  const [sleeve, setSleeve] = useState("O000000D");

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
    option1.value = sleeve;
    form.appendChild(option1);

    const option2 = document.createElement("input");
    option2.type = "hidden";
    option2.name = "option_code[]";
    option2.value = collar;
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
      <img src="/base_shirt.png" alt="Base Shirt" style={{ width: 300 }} />
      <div>
        <button onClick={() => setSleeve("O000000D")}>긴소매</button>
        <button onClick={() => setSleeve("O000000E")}>반소매</button>
      </div>
      <div>
        <button onClick={() => setCollar("O000000C")}>기본카라</button>
        <button onClick={() => setCollar("O000000F")}>단추카라</button>
      </div>
      <div>
        <button onClick={handleAddToCart}>장바구니 담기</button>
      </div>
    </div>
  );
}

export default App;

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Shirt Customizer</h1>

      <div className="relative w-[300px] h-[500px]">
        <img
          src="/images/base_shirt.png"
          alt="Base Shirt"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        {getImage("collar", collar) && (
          <img
            src={getImage("collar", collar)}
            alt="Collar"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        )}
        {getImage("sleeve", sleeve) && (
          <img
            src={getImage("sleeve", sleeve)}
            alt="Sleeve"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        )}
        {getImage("button", button) && (
          <img
            src={getImage("button", button)}
            alt="Button"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        )}
      </div>

      <div className="mt-6 flex gap-4">
        <div>
          <label className="block text-sm font-semibold">Collar</label>
          <select
            className="p-2 border rounded"
            onChange={(e) => setCollar(e.target.value)}
          >
            <option value="default">기본</option>
            <option value="1">단추 카라</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">Sleeve</label>
          <select
            className="p-2 border rounded"
            onChange={(e) => setSleeve(e.target.value)}
          >
            <option value="default">기본</option>
            <option value="1">장식 소매</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">Button</label>
          <select
            className="p-2 border rounded"
            onChange={(e) => setButton(e.target.value)}
          >
            <option value="default">기본</option>
            <option value="1">별 단추</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
