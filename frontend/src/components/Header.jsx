export default function Header() {
  return (
    <div>
      <h1>Grunt Mart</h1>
      <div>Shopy by category</div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div>shopping cart</div>
    </div>
  );
}
