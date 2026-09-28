import React, { useState, useEffect, useRef } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };
  //eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 7);
    }, 500);
    return () => clearInterval(intervalRef.current);
  }, []);

  //   eg3

  const [newProduct, setNewProduct] = useState(true);
  const [imgURL, setImgURL] = useState("");
  const imgRef = useRef(0);

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
      setNewProduct(false);
    }
  };

  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={focusInput}>focus</button>
      </div>
      <div>
        <h3>timer:{sec}</h3>
        <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      </div>
      <div>
        <input type="file" ref={imgRef} hidden onChange={handleImg} />
        {newProduct ? (
          <div className="container-img" onClick={() => imgRef.current.click()}>
            upload img....!
          </div>
        ) : (
          <img
            className="img-org"
            src={imgURL}
            onClick={() => imgRef.current.click()}
          />
        )}
      </div>
    </div>
  );
}
