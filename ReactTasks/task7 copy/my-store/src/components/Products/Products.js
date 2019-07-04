import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../../images/cycle_tour.jpg";
import img2 from "../../images/amashova.png";
import img3 from "../../images/tourDBN.jpg";
import "./Products.css";

const Products = props => {
  let transport = [
    { event: "Cape Town Cycle Tour", date: "10 March 2020", logo: img1 },
    { event: "Amashova Durban", date: "10 October 2019", logo: img2 },
    { event: "Tour of Durban", date: "08 May 2020", logo: img3 }
  ];

  let cardContent = transport.map(card => {
    return (
      <Card
        bg="light"
        style={{
          width: "30%"
        }}
      >
        <Card.Img
          style={{ height: "250px", marginTop: "10px" }}
          variant="top"
          src={card.logo}
        />
        <Card.Body>
          <Card.Title>{card.event}</Card.Title>
          <Card.Text>
            <p>{card.date}</p>
            <button>More Info</button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="Header">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"
      />
      <h1>Our Upcoming Transport Events</h1>
      <div className="Products">{cardContent}</div>
    </div>
  );
};

export default Products;
