import portrait from "../../assets/portrait.png";
import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

// const { Meta } = Card;

const PictureCard = () => (
  <Card
    className="flex-1  "
    hoverable
    style={{
      width: "auto",
      height: "auto",
      transition: "all 0.5s",
    }}
    cover={<img alt="my portrait" className="bg-gray-100" src={portrait} />}
  ></Card>
);

export default PictureCard;
