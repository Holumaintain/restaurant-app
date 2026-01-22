export default function Signin() {
  return (
    <div className="container py-4">
      <h2>Sign In</h2>
      <input className="form-control mb-2" placeholder="Email" />
      <input className="form-control mb-2" type="password" placeholder="Password" />
      <button className="btn btn-primary">Login</button>
    </div>
  );
}
