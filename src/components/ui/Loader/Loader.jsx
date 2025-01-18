import "./loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <div className="container">
        <div className="cube">
          <div className="cube__inner"></div>
        </div>
        <div className="cube">
          <div className="cube__inner"></div>
        </div>
        <div className="cube">
          <div className="cube__inner"></div>
        </div>
      </div>
    </div>
  );
};
