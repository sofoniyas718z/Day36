import { useState } from "react";
import { useCartStore } from "./Cart/CartStore";

function OrderForm() {
  const clear = useCartStore((state) => state.clear);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole"
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));
  }

  const validName =
    form.name.trim().length >= 2;

  const validPhone =
    /^(?:\+251|0)9\d{8}$/.test(
      form.phone
    );

  const validForm =
    validName && validPhone;

  function handleSubmit(event) {
    event.preventDefault();

    if (!validForm) {
      return;
    }

    setSubmitted(true);
    clear();
  }

  if (submitted) {
    return (
      <div className="success-box">
        <h2>Order submitted!</h2>

        <p>
          Thank you, {form.name}. Your order is being
          prepared.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delivery Information</h2>

      <label>
        Name

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </label>

      {!validName &&
        form.name.length > 0 && (
          <small>
            Name must contain at least 2 characters.
          </small>
        )}

      <label>
        Phone

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="09xxxxxxxx"
        />
      </label>

      {!validPhone &&
        form.phone.length > 0 && (
          <small>
            Enter a valid Ethiopian phone number.
          </small>
        )}

      <label>
        Area

        <select
          name="area"
          value={form.area}
          onChange={handleChange}
        >
          <option value="Bole">
            Bole
          </option>

          <option value="Piassa">
            Piassa
          </option>

          <option value="Kazanchis">
            Kazanchis
          </option>

          <option value="CMC">
            CMC
          </option>

          <option value="Mexico">
            Mexico
          </option>
        </select>
      </label>

      <button
        type="submit"
        disabled={!validForm}
      >
        Place Order
      </button>
    </form>
  );
}

export default OrderForm;