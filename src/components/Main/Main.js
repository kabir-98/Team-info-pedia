import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Main.css";
import { IoArrowForward } from "react-icons/io5";

const Main = props => {
  const { strTeam, strSport, strTeamBadge, idTeam } = props.club;
  return (
    <Col xs={12} sm={4}>
      <Card className="my-4">
        <Card.Img className="crd-img" variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>
            Sports Type: {strSport}
            <br></br>
          </Card.Text>
          {/* <Button variant="primary"><Link to={`/about`}></Link>Go somewhere</Button> */}

          <Link to={`/Details/${idTeam}`}>
            <Button>
              Explore <IoArrowForward />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Main;
