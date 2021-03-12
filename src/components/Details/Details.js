import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaFlag, FaFacebookF } from "react-icons/fa";
import {
  IoLocation,
  IoFootball,
  IoMale,
  IoFemale,
  IoLogoTwitter,
  IoLogoYoutube
} from "react-icons/io5";
import { Container, Row } from "react-bootstrap";

import "./Details.css";

import maleImg from "../../images/male.png";
import femaleImg from "../../images/female.png";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then(res => res.json())
      .then(data => setDetails(data?.teams?.[0] ?? {}));
  }, [id]);

  const isFemale = details?.strGender === "Female";

  return (
    <Container fluid>
      <Row
        style={{ backgroundImage: `url(${details.strTeamBanner})` }}
        className="team-banner"
      >
        <div className="overlay"></div>
        <img src={details.strTeamBadge} alt="" />
      </Row>
      <Row className="bg-color py-4">
        <section className="text-white container">
          <div className={`team-info ${isFemale ? "female-team" : ""} row`}>
            <div className="info col-sm-6">
              <h2>{details.strTeam}</h2>
              <div>
                <IoLocation /> <b>Founded:</b> {details.intFormedYear}
              </div>
              <div>
                <FaFlag /> <b>Country:</b> {details.strCountry}
              </div>
              <div>
                <IoFootball /> <b>Sports Type:</b> {details.strSport}
              </div>
              <div>
                {isFemale ? <IoFemale /> : <IoMale />} <b>Gender:</b>{" "}
                {details.strGender}
              </div>
            </div>
            <img
              src={isFemale ? femaleImg : maleImg}
              alt=""
              className="team-image col-sm-4 responsive-img"
            />
          </div>
          <section className="team-details p-4">
            {details.strDescriptionEN}
          </section>

          <section className="my-4 social-icons">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-round btn-twitter"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-round btn-facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-round btn-youtube"
            >
              <IoLogoYoutube />
            </a>
          </section>
        </section>
      </Row>
    </Container>
  );
};

export default Details;
