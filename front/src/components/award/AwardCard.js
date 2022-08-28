import { Card, Button, Row, Col } from "react-bootstrap";
import convertTime from "../utils/convertTime";

const AwardCard = ({ award, setIsEditing, isEditable }) => {
  const awardDate = convertTime(award.awardedAt).split("T")[0];

  return (
    <Row className="mb-4">
      <Col>
        <Card.Text>
          {award.host}
          <br />
          <span className="text-muted">{award.name}</span>
          <br />
          <span className="text-muted">{awardDate}</span>
        </Card.Text>
      </Col>

      {isEditable && (
        <Col>
          <Button
            variant="outline-info"
            size="sm"
            style={{
              position: "absolute",
              right: 0,
              marginRight: "30px",
            }}
            onClick={() => setIsEditing(true)}
          >
            편집
          </Button>
        </Col>
      )}
    </Row>
  );
};

export default AwardCard;
