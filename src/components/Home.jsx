import React, { useContext } from "react";
import "./Home.css";
import { Context } from "../context/Context";

const Home = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="home-container">
        <div className="home-wrap">
          <div className="header">The Nerd</div>
          {!showResult ? (
            <>
              <h2>What do you wanna explore today ? </h2>
            </>
          ) : (
            <>
              {loading ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  <span></span>
                  <span id="result" dangerouslySetInnerHTML={{__html:resultData}}></span>
                </>
              )}
            </>
          )}
          <div className="footer">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="     enter the prompt here"
            />
            <button onClick={() => onSent()}>Explore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
