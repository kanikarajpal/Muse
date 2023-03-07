import "./TrendingStyle.css";
import Trend from "../Trend/Trend";
import { ContentContext } from "../../../App";
import {  useContext } from "react";
import { Container, Row, Col } from "react-grid-system";

export default function Trending({ title }) {
  const { playlist } = useContext(ContentContext);

  return (
    <div className="trending-section">
      <p className="main-head">{title}</p>
      <div className="main-section">
        <Container className="item">
          <Row gutterWidth={30}>
            {playlist.map((item, index) => {
              if (index < 8) {
                return (
                  <Col md={6} lg={6} key={index}>
                    <Trend ind={index} key = {index} />
                  </Col>
                );
              }
              else {
                return <div key = {index}></div>;
              }
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
