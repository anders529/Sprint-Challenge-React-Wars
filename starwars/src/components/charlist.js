import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle } from 'reactstrap';
  
  const CharList = (props) => {
  return (
    <div>
      <Card style={{width: "25%"}}>
        <CardHeader>Name: {props.name}</CardHeader>
        <CardBody>
        <CardTitle>Birthdate: {props.birth_year}</CardTitle>
          <CardTitle>Sex: {props.gender}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

  export default CharList;