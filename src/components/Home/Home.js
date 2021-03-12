import React from "react";
import { useState, useEffect } from "react";
// import Home from './components/Home/Home';
import "./Home.css";
import Main from "../Main/Main";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=England"
    )
      .then(res => res.json())
      .then(data => setClubs(data?.teams ?? []));
  }, []);
  return (
    <Container fluid>
      <section className="home-design row">
        <h2>Know about your team</h2>
      </section>
      <Row className="bg-color px-4 py-2">
        {clubs
          .filter(club => !!club.strTeamBadge && !!club.strTeamBanner)
          .map(club => (
            <Main club={club}></Main>
          ))}
      </Row>
    </Container>
  );
};

export default Home;
