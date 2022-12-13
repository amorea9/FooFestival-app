import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const navigate = useNavigate();
  //handle ticketnr input
  const ticketNr = document.querySelector("input[id=ticketNumber]");
  const logInBtn = document.querySelector("input[id=log-in-button]");
  console.log(logInBtn);
  const [ticketInput, setTicketInput] = useState("");

  function submit(e) {
    e.preventDefault();
    props.setLogin(true);
    navigate("/landing-page#top");
  }

  const handleTicketNr = (event) => {
    console.log(event.target.value);
    const result = event.target.value.toUpperCase();
    setTicketInput(result);
    if (ticketNr.value.length > 8) {
      logInBtn.focus();
    }
  };

  return (
    <section className="log-in-page">
      <h1>Welcome to FooFest 2023</h1>
      <div className="form-wrapper">
        <form onSubmit={submit} className="log-in-form">
          <h3>Log in</h3>
          <div className="email-input">
            <label htmlFor="email"> Email</label>
            <input
              required
              pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
              title="Must be a valid email address"
              aria-required="true"
              autoFocus
              id="email"
              type="email"
              name="email"
              placeholder="JohnDoe@gmail.com"
            />
          </div>
          <div className="ticket-number-input">
            <label htmlFor="ticketNumber">Ticket number </label>
            <input
              title="Must be a valid Ticket Number"
              required
              aria-required="true"
              id="ticketNumber"
              type="text"
              name="ticketNumber"
              onChange={handleTicketNr}
              minLength={9}
              maxLength={9}
              value={ticketInput}
              placeholder="AID74RBSM"
            />
          </div>

          <input
            className="log-in-button"
            id="log-in-button"
            name="log-in-button"
            type="submit"
            value="Log in &#10132;"
            onClick={() => {
              submit();
            }}
          />
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
