import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col, Row, Badge } from "react-bootstrap";
import CardItems from "./CardItems";
import "../App.css";

export default function AlbumCards(props) {
  const { APIData } = props;

  const [flag, setFlag] = useState(false);
  const [ItemList, setItemList] = useState([]);

  const handleClick = (e) => {
    setFlag(true);
    const Item = APIData.filter((item) => {
      return item?.userId === e.userId;
    });
    if (Item) {
      setItemList(Item);
    }
  };

  const countOfTotalItems = (userId) => {
    const items = APIData.filter((album) => album.userId === userId);

    return items.length;
  };

  const renderAlbums = () => {
    const uniqueUserIds = new Set();
    const filterAlbumById = APIData.filter((album) => {
      const userId = album.userId;
      if (!uniqueUserIds.has(userId)) {
        uniqueUserIds.add(userId);
        return true;
      }
      return false;
    });

    return filterAlbumById.map((album, index) => (
      <Col>
        <Card
          key={album.id}
          className="cardStyle"
          style={{ backgroundColor: "pink" }}
          id={album.id}
          onClick={() => handleClick(album)}
        >
          <div style={{ marginLeft: "170px" }}>
            <Badge pill bg="secondary">
              {countOfTotalItems(album.userId)}
            </Badge>
          </div>
          <div
            className="button_div d-flex justify-content-center"
            style={{ width: "200px", height: "200px" }}
          >
            <Card.Body>
              <Card.Img src="./album.jpg"></Card.Img>
              <Card.Title>
                <div className="button_div d-flex justify-content-center cardBody">
                  userId:<b>{album.userId}</b>
                </div>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>
      </Col>
    ));
  };

  return (
    <>
      <Container>
        {!flag ? (
          <Row sm={5}>{renderAlbums()}</Row>
        ) : (
          <div>
            <CardItems ItemList={ItemList} setItemList={setItemList} />
          </div>
        )}
      </Container>
    </>
  );
}
