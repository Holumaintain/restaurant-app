import { useParams } from 'react-router-dom';

export default function EventDetails() {
  const { id } = useParams();

  return (
    <div className="container py-4">
      <h2>Event Details</h2>
      <p>Event ID: {id}</p>
    </div>
  );
}
