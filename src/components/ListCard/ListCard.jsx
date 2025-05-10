import Card from "../Card/Card";
import "./ListCard.css";

function ListCard({ data }) {
  return (
    <div className="flex-card">
      <div className="display-card">
        {data.map((country) => (
          <div key={country.code}>
            <Card zones={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListCard;
