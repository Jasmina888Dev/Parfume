import React, { useState } from "react";
import "./admin.scss";
import upload from "../../../assets/upload.svg";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/productSlice";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [brand, setBrand] = useState("");
  const [batches, setBatches] = useState("");
  const [image, setImage] = useState(null);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  function addProduct() {
    let newProduct = {
      id: Date.now(),
      name,
      price,
      des,
      brand,
      batches,
      image,
    };
    dispatch(addTask(newProduct));

    setName("");
    setPrice("");
    setDes("");
    setBrand("");
    setBatches("");
    setImage(null);
    setModal(false);
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin--block1">
            <h1>PRODUCT INFORMATION</h1>
            <div className="admin--block1__inputs">
              <div className="admin--block1__inputs--text">
                <div className="admin--block1__inputs--text__name">
                  <h3>PRODUCT NAME:</h3>
                  <h3>PRODUCT PRICE:</h3>
                  <h3>PRODUCT DESCRIPTION:</h3>
                  <h3>PRODUCT BRAND:</h3>
                  <h3>NO.OF BATCHES AVAILABLE:</h3>
                </div>

                <div className="admin--block1__inputs--text__form">
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                  <input
                    type="text"
                    onChange={(e) => setDes(e.target.value)}
                    value={des}
                  />
                  <input
                    type="text"
                    onChange={(e) => setBrand(e.target.value)}
                    value={brand}
                  />
                  <input
                    type="text"
                    onChange={(e) => setBatches(e.target.value)}
                    value={batches}
                  />
                </div>
              </div>

              <div className="admin--block1__inputs--image">
                <h2>UPLOAD PRODUCT IMAGE:</h2>
                <div>
                  <input
                    type="file"
                    id="fileUpload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <img
                    src={upload}
                    alt="Upload icon"
                    onClick={() =>
                      document.getElementById("fileUpload").click()
                    }
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <button onClick={() => setModal(true)}>PREVIEW PRODUCT</button>
              </div>
            </div>
          </div>

          {modal && (
            <div className="admin--block1">
              <h1>PRODUCT PREVIEW</h1>
              <div className="admin--block1__inputs">
                <div className="admin--block1__inputs--text">
                  <div className="admin--block1__inputs--text__name">
                    <h3>PRODUCT NAME:</h3>
                    <h3>PRODUCT PRICE:</h3>
                    <h3>PRODUCT DESCRIPTION:</h3>
                    <h3>PRODUCT BRAND:</h3>
                    <h3>NO.OF BATCHES AVAILABLE:</h3>
                  </div>

                  <div className="admin--block1__inputs--text__form">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <input
                      type="text"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                    <input
                      type="text"
                      onChange={(e) => setDes(e.target.value)}
                      value={des}
                    />
                    <input
                      type="text"
                      onChange={(e) => setBrand(e.target.value)}
                      value={brand}
                    />
                    <input
                      type="text"
                      onChange={(e) => setBatches(e.target.value)}
                      value={batches}
                    />
                  </div>
                </div>

                <div className="admin--block1__inputs--image">
                  <h2>PRODUCT IMAGE PREVIEW:</h2>
                  <div>
                    {/* Эгер сүрөт бар болсо, көрсөт */}
                    {image ? (
                      <img
                        src={image}
                        alt="Preview"
                        style={{ width: "90px" }}
                      />
                    ) : (
                      <p>No image uploaded</p>
                    )}
                  </div>
                  <button onClick={addProduct}>ADD PRODUCT</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
