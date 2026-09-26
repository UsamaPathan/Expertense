import React, { useEffect, useState } from "react";
import "./Button.css";
import Hero_1 from '../images/hero_1.png'
import Hero_2 from '../images/hero_2.png'
function Graph() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    generateChart();
  }, []);

  const generateChart = () => {
    const newData = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 65) + 35
    );

    setChartData(newData);
  };

  const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

  return (
    <section className="expertise-section">

      <div className="container-fluid">

        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-lg-8 col-md-7">

            <div className="left-design">

              {/* GRAPH BOX */}
              <div className="spend-card">

                <div className="spend-title">
                  Spend
                  <br />
                  Overview
                </div>

                <div className="chart-area">

                  <div className="chart-bars">

                    {chartData.map((height, index) => (
                      <div
                        className="bar-wrapper"
                        key={index}
                      >

                        <div
                          className={`chart-bar ${
                            index === 4 ? "active-bar" : ""
                          }`}
                          style={{ height: `${height}%` }}
                        >
                          {index === 4 && (
                            <span className="amount">
                              $1,512.00
                            </span>
                          )}
                        </div>

                        <span className="month">
                          {months[index]}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>


              {/* MAIN IMAGE */}
              <div className="main-image-wrapper">

                <img
                  src={Hero_1}
                  alt="Business meeting"
                  className="main-image"
                />

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="col-lg-4 col-md-5">

            <div className="right-design">

              {/* TOP IMAGE */}
              <div className="top-image-wrapper">

                <img
                  src={Hero_2}
                  alt="Business woman"
                  className="top-image"
                />

              </div>


              {/* BLACK/PURPLE STATS CARD */}
              <div className="stats-card">

                <div className="stat-item">

                  <h2>16K</h2>

                  <p>
                    Years Experience
                  </p>

                </div>


                <div className="stat-item">

                  <h2>86K</h2>

                  <p>
                    Businesses Have
                    <br />
                    Already Joined Us
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Graph;