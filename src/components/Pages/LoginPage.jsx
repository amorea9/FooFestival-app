import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
  }
  return (
    <section className="log-in-page">
      <h1>Welcome to FooFest 2023</h1>
      <div className="form-wrapper">
        <form onSubmit={submit} className="log-in-form">
          <h3>Log in</h3>
          <div className="email-input">
            <label htmlFor="email"> Email </label>
            <input id="email" type="email" placeholder="JohnDoe@gmail.com" />
          </div>
          <div className="ticket-number-input">
            <label htmlFor="ticketNumber">Ticket number </label>
            <input id="ticketNumber" type="text" placeholder="AID74RBSM8Y" />
          </div>

          <input
            className="log-in-button"
            type="submit"
            value="Log in &#10132;"
            onClick={() => {
              props.setLogin(true);
              navigate("/landing-page#top");
            }}
          />
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
