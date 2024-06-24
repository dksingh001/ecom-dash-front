const shop = () => {
  return (
    <>
      <div id="main">
        <div className="main-section">
          <div className="second-section">
            <div className="first-section">
              <div className="all">
                <h2> All Products</h2>
              </div>
              <div className="filter">
                <select name="Default sorting" id="">
                  <option value="">Default sorting</option>
                  <option value="">high to low</option>
                  <option value="">low to high</option>
                  <option value=""> Sort by top Brand </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default shop;
