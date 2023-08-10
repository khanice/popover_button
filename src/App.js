import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Popover Button</h1>
      <div className="button">
        <button className="btn">Popover button</button>
      </div>
      <div className="popover">
        <p>
          This is a popver buttonand data displayed here will be displayed in
          popover
        </p>
      </div>
    </div>
  );
}
