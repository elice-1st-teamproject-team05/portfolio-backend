import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import * as Api from "../../api";
import DatePicker from "react-datepicker";

const AwardEditForm = ({
  award,
  setAwards,
  setIsEditing,
  portfolioOwnerId,
}) => {
  const [title, setTitle] = useState(award.awardWhere);
  const [description, setDescription] = useState(award.awardName);
  const [awardDate, setAwardDate] = useState(new Date(award.awardDate));
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Api.put(`awards/${award.awardNumber}`, {
      awardWhere: title,
      awardName: description,
      awardDate: awardDate,
    });

    const res = await Api.get(`users/${portfolioOwnerId}/awards`);
    const edit = res.data;
    setAwards(edit);
    setIsEditing(false);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle" className="mb-3">
        <Form.Control
          type="texrt"
          placeholder="수상내역"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDescription" className="mb-3">
        <Form.Control
          type="text"
          placeholder="상세내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Row} controlId="awardEditDate" className="mb-3">
        <Col>
          <DatePicker
            selected={awardDate}
            onChange={(date) => setAwardDate(date)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mt-3 text-center mb-4">
        <Col sm={{ span: 20 }}>
          <Button variant="primary" type="submit" className="me-3">
            확인
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default AwardEditForm;
