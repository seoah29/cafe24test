import { useState } from "react";

function App() {
  const [collar, setCollar] = useState("default");
  const [sleeve, setSleeve] = useState("default");
  const [button, setButton] = useState("default");

  const getImage = (part, value) => {
    if (value === "default") return null;
    return `/images/${part}${value}.png`;
  };

  const getOptionCode = (type, value) => {
    if (value === "default") return null;
    const map = {
      collar: {
        "1": "O000000E", // 단추 카라
      },
      sleeve: {
        "1": "O000000D", // 장식 소매
      },
      button: {
        "1": "O000000C", // 별 단추
      },
    };
    return map[type]?.[value] ?? null;
  };

  const handleAddToCart = () => {
    const collarCode = getOptionCode("collar", collar);
    const sleeveCode = getOptionCode("sleeve", sleeve);
    const buttonCode = getOptionCode("button", button);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://seoah29.cafe24.com/order/basket.html";
    
    //https://seoah29.cafe24.com/exec/front/order/basket/
    form.target = "_blank";

    const productNoInput = document.createElement("input");
    productNoInput.name = "product_no";
    productNoInput.value = "10"; // 상품 번호
    form.appendChild(productNoInput);

    [collarCode, sleeveCode, buttonCode].forEach((code) => {
      if (code) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "option_code[]";
        input.value = code;
        form.appendChild(input);
      }
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

      <button
        onClick={handleAddToCart}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        장바구니 담기
      </button>
    </div>
  );
}

export default App;
