import React, { useEffect, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";

import "../App.css";

function CardItems(props) {
  const { ItemList, setItemList } = props;

  const [searchInput, setSearchInput] = useState("");
  const [seenItems, setSeenItems] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [flag, setFlag] = useState(false);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    if (searchInput.length === 0) {
      setFlag(false);

      setItemList(ItemList);
    }
  }, [searchInput]);

  //search

  const searchItems = () => {
    setFlag(true);

    if (searchInput !== "") {
      const filteredData = ItemList.filter((item) => {
        return item.title.toLowerCase().includes(searchInput.toLowerCase());
      });

      setFilteredResults(filteredData);
    } else {
      setItemList(ItemList);
    }
  };

  const handleClick = (e) => {
    if (seenItems.includes(e)) {
      return;
    }
    setSeenItems([...seenItems, e]);
  };

  const showData = flag ? filteredResults : ItemList;

  return (
    <>
      <Form style={{ maxWidth: "900px", margin: "10px" }} className="SearchBar">
        <InputGroup className="mb-3">
          <Form.Control
            style={{ marginLeft: "300px" }}
            value={searchInput}
            onChange={handleChange}
            placeholder="Search Beers"
          />

          <Button onClick={searchItems}>search</Button>
        </InputGroup>
      </Form>
      {showData.map((item) => {
        const isSeen = seenItems?.includes(item.id);

        const title = isSeen ? item.title + `(Seen)` : item.title;
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              key={item.id}
              onClick={() => handleClick(item.id)}
              style={{
                marginTop: "10px",
                width: "500px",
                alignContent: "center",
              }}
            >
              <Card.Body style={isSeen ? { backgroundColor: "aqua" } : null}>
                {title}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default CardItems;
