import React from "react";

const Sprite = ({ name, sprite }: { name: string; sprite: string }) => {
  return (
    <div>
      <img src={sprite} alt={name} />
    </div>
  );
};

export default Sprite;
