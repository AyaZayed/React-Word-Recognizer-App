function Rank({ rank }) {
  return (
    <div className="rank-section">
      <div className="card">
        Your rank is <span>{rank}</span> among all users
      </div>
    </div>
  );
}

export default Rank;
