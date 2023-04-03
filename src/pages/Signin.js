export default function Signin() {
  return (
    <div>
      <form>
        <label id="email-input">email</label>
        <input data-testid="email-input" type="email" />
        <label id="email-input">password</label>
        <input data-testid="password-input" type="password" />
        <button data-testid="signin-button">Login</button>
      </form>
    </div>
  );
}
