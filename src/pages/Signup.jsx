export default function Signup() {
  return (
    <div className="container py-4">
      <h2>Sign Up</h2>
      <input className="form-control mb-2" placeholder="Email" />
      <input className="form-control mb-2" type="password" placeholder="Password" />
      <button className="btn btn-success">Create Account</button>
    </div>
  );
}
