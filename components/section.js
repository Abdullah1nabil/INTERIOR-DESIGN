const Section = () => {
  return (
    <section>
      <div className="container">
        <div className="cards">
          <div className="card">
            <h1>Title 1</h1>
            <img src="images/DSC69161.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              malesuada non libero ac dapibus. Pellentesque semper eros non
              sagittis gravida.{" "}
            </p>
            <input type="submit" value="MORE INFO" />
          </div>
          <div className="card">
            <h1>Title 2</h1>
            <img src="images/DSC69521.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              malesuada non libero ac dapibus. Pellentesque semper eros non
              sagittis gravida.{" "}
            </p>
            <input type="submit" value="MORE INFO" />
          </div>
          <div className="card">
            <h1>Title 3</h1>
            <img src="images/DSC6954.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              malesuada non libero ac dapibus. Pellentesque semper eros non
              sagittis gravida.{" "}
            </p>
            <input type="submit" value="MORE INFO" />
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};
export default Section;
