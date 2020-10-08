import React, { useEffect, useState } from "react";
import axios from "axios";
import map from "../map.png";
import { Row, Col } from "react-bootstrap";

const Profile = (props) => {
  const { id } = props.match.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        const postAuthor = response.data.find(
          (postUser) => postUser.id === +id
        );
        setUser(postAuthor);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Row className="justify-content-center post">
        <Col md="6">
          <h1 className="profile-name">{user.name}</h1>
          <Row>
            <Col md="3" className="profile-key">
              Username
            </Col>
            <Col md="9" className="profile-value">
              {user.username}
            </Col>
            <Col md="3" className="profile-key">
              Email
            </Col>
            <Col md="9" className="profile-value">
              {user.email}
            </Col>
            <Col md="3" className="profile-key">
              Phone
            </Col>
            <Col md="9" className="profile-value">
              {user.phone}
            </Col>
            <Col md="3" className="profile-key">
              Website
            </Col>
            <Col md="9" className="profile-value">
              <a href={user.website}>{user.website}</a>
            </Col>
            <Col md="3" className="profile-key">
              Company
            </Col>
            <Col md="9" className="profile-value">
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <img src={map} alt="Harita" />
        </Col>
      </Row>
      <hr className="my-5" />
      <Row>
        <Col md="12" className="text-center">
          <p className="color-navy profile-bottom">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p className="color-navy profile-bottom">
            Ut ea nostrum numquam officiis quas commodi dolores nobis eaque
            veniam quos impedit sit,{" "}
          </p>
          <p className="color-navy profile-bottom">
            eligendi architecto cum vitae minima suscipit cupiditate iure
            ratione asperiores rerum atque aperiam deserunt est.
          </p>
          <a href="#">Show More</a>
        </Col>
      </Row>
    </>
  );
};
export default Profile;
