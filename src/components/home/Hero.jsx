export default function Hero() {
  return (
    <section
      className="py-5 text-center text-white"
      style={{
        background: 'linear-gradient(to right, #FF6B35, #FFD4C4)',
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1 className="display-5 fw-bold">Welcome to Fresh Fork</h1>
      <p className="lead">Order your favorite meals online!</p>
    </section>
  );
}
