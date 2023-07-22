import { FiShoppingCart } from "react-icons/fi";

function Header() {
  const cartOpen = () => {
    const overlay = document.querySelector("#overlay");
    const cartButton = document.querySelector(".cart");

    if (!cartButton.classList.contains("opened")) {
      cartButton.classList.add("opened");
      overlay.classList.add("active");
    
      overlay.addEventListener("click", () => {
        const cart = document.querySelector(".cart");
    
        cart.classList.remove("opened");
        document.querySelector("#overlay").classList.remove("active");
      });
    }
  };

  return (
    <header className="padding">
      <div>
        <h1>ALPHA</h1>
        <span onClick={cartOpen}>
          <FiShoppingCart size={30} />
        </span>
      </div>
    </header>
  );
}

export default Header;
