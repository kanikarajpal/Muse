import "./TrendingStyle.css";
import Trend from "../Trend/Trend";
import { ContentContext } from "../../../App";
import { useContext } from "react";
import { Container, Row, Col } from "react-grid-system";

export default function Trending({ title }) {
  const { playlist, index } = useContext(ContentContext);

  return (
    <div className="trending-section">
      <h2 className="main-head">{title}</h2>
      <div className="main-section">
        <Container className="item" >
          <Row gutterWidth={30}>
            {playlist.map((item, index) => {
              if(index<8)
              return <Col md={6} lg={6}>
                <Trend ind={index} />
            </Col>
            })}
          </Row>
        </Container>
      </div>
    </div> 
  );
}
