import portrait from "../../assets/portrait.jpg";
import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

// const { Meta } = Card;

const PictureCard = () => (
  <Card
    className="flex-1"
    hoverable
    style={{
      width: "auto",
      height: "auto",
      transition: "all 0.5s",
    }}
    cover={<img alt="my portrait" className="bg-white" src={portrait} />}
  ></Card>
);

export default PictureCard;
