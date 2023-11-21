import React from "react";
import { Link } from "react-router-dom";
import { catList } from "../../data/CatsList";
import "./AdoptionList.css";

const Adoption = () => {
  return (
    <div>
      {catList.map((cat, index) => (
        <>
          <div className="cat" key={index}>
            <div>
              <img
                src={cat.catImg}
                alt="cat"
                height="600px"
                style={{ borderRadius: "50px" }}
              />
              <div>
                <h2 className="boxi">{cat.catName}</h2>
                <p className="cat-desc">{cat.description}</p>
                <p>
                  - {cat.age}, {cat.gender}, {cat.breed} -
                </p>
                <Link
                  to="/adoptionform"
                  state={{ catName: cat.catName }}
                  className="generalBtn"
                >
                  Adopt {`${cat.catName}`}
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="lines">
              <div className="circle"></div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Adoption;
