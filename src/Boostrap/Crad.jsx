import React from "react";
import Cardui from "./Cardui";
import './Style.css'

const Card = () => {
  return (
    <>
    
      <div className="card-container">

        <Cardui
          pic="https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj"
          title="Mastering"
          text="Mastering the Art of Culinary Delights"
        />

        <Cardui
          pic="https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288870.jpg"
          title="Mastering"
          text="Mastering the Art of Culinary Delights"
        />

        <Cardui
          pic="https://play-lh.googleusercontent.com/UPc6zSqp7jLkZOaxoYZTtLKUz9T8vyMA6_TKwgSA0-MbemF3UDbEnBYPxct1zjq5PhtC=w300"
          title="Mastering"
          text="Mastering the Art of Culinary Delights"
        />
        <Cardui
          pic="https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288883.jpg"
          title="Mastering"
          text="Mastering the Art of Culinary Delights"
        />

        <Cardui
          pic="https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288879.jpg"
          title="Mastering"
          text="Mastering the Art of Culinary Delights"
        />
      </div>
     
    </>
  );
};

export default Card;
