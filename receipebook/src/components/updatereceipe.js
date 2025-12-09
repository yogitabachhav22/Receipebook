import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import './updatereceipe.css'

function Updatereceipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newRecipe, setNewRecipe] = useState({});
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Fetch recipe
  useEffect(() => {
    console.log(id)
   
    axios.get(`http://localhost:5000/recipes/${id}`).then((res) => {
      setNewRecipe(res.data);
      setTags(res.data.tags || []);
        
      setRating(res.data.rating || 0);
    
    });
  }, [id]);

  // Handle Updating the Recipe
  const updatedata = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      ...newRecipe,
      tags: tags,
      rating: rating,
    };

    axios
      .put(`http://localhost:5000/recipes/${id}`, updatedRecipe)
      .then(() => setShowModal(true));
     
  };

  // Delete the Recipe
  const deleteRecipe = () => {
    axios.delete(`http://localhost:5000/recipes/${id}`).then(() => {
      navigate("/");
    });
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewRecipe({ ...newRecipe,  });
  };

  // Add tag
  const addTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // Remove tag
  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <>
      <h1 className="text-center mt-4">Update Recipe</h1>

      <Form className="p-4" onSubmit={updatedata}>
        {/* NAME */}
        <Form.Group as={Row} className="mb-3" controlId="name">
          <Form.Label column sm="2">Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              value={newRecipe.name || ""}
              onChange={(e) =>
                setNewRecipe({ ...newRecipe, name: e.target.value })
              }
            />
          </Col>
        </Form.Group>

        {/* IMAGE UPLOAD */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Image</Form.Label>
          <Col sm="10">
            <Form.Control type="file" onChange={handleImageUpload} />
            {newRecipe.image && (
              <img
                src={newRecipe.image}
                alt="preview"
                  className="mt-2 preview-img"
                width="20"
                style={{ borderRadius: "10px" }}
              />
            )}
          </Col>
        </Form.Group>

        {/* TAGS */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Tags</Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              value={tagInput}
              placeholder="Add tag..."
              onChange={(e) => setTagInput(e.target.value)}
            />
          </Col>
          <Col sm="2">
            <Button variant="success" onClick={addTag}>
              Add
            </Button>
          </Col>

          <Col sm="12" className="mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#17a2b8",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                onClick={() => removeTag(tag)}
              >
                {tag} ✕
              </span>
            ))}
          </Col>
        </Form.Group>

        {/* RATING */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Rating</Form.Label>
          <Col sm="10">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={30}
                color={star <= rating ? "gold" : "gray"}
                onClick={() => setRating(star)}
                style={{ cursor: "pointer", marginRight: "5px" }}
              />
            ))}
          </Col>
        </Form.Group>

        {/* INGREDIENTS */}

        {/* INGREDIENTS */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="2">Ingredients</Form.Label>
  <Col sm="10">
    <Form.Control
      as="textarea"
      rows={3}
      value={
        Array.isArray(newRecipe.ingredients)
          ? newRecipe.ingredients.join("\n")
          : newRecipe.ingredients || ""
      }
      onChange={(e) =>
        setNewRecipe({
          ...newRecipe,
          ingredients: e.target.value.split("\n"),
        })
      }
    />
    <small className="text-muted">
      Write one ingredient per line.
    </small>
  </Col>
</Form.Group>

         {/* <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Ingredients</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              value={newRecipe.ingredients || ""}
              onChange={(e) =>
                setNewRecipe({ ...newRecipe, ingredients: e.target.value })
              }
            />
          </Col>
        </Form.Group>  */}
        {/* <Form.Control
  as="textarea"
  rows={3}
  value={newRecipe.ingredients?.join("\n") || ""}
  onChange={(e) =>
    setNewRecipe({
      ...newRecipe,
      ingredients: e.target.value.split("\n")
    })
  }
/> */}


        {/* INSTRUCTIONS */}
        {/* <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Instructions</Form.Label>
          <Col sm="10">
            <Form.Control
              as="textarea"
              rows={4}
              value={newRecipe.instructions || ""}
              onChange={(e) =>
                setNewRecipe({ ...newRecipe, instructions: e.target.value })
              }
            />
          </Col>
        </Form.Group> */}

        {/* INSTRUCTIONS */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="2">Instructions</Form.Label>
  <Col sm="10">
    <Form.Control
      as="textarea"
      rows={5}
      value={
        Array.isArray(newRecipe.instructions)
          ? newRecipe.instructions.join("\n")
          : newRecipe.instructions || ""
      }
      onChange={(e) =>
        setNewRecipe({
          ...newRecipe,
          instructions: e.target.value.split("\n"),
        })
      }
    />
    <small className="text-muted">
      Write each step on a new line.
    </small>
  </Col>
</Form.Group>


        {/* CUISINE */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Cuisine</Form.Label>
          <Col sm="10">
            <Form.Control
              type="string"
              value={newRecipe.cuisine || ""}
              onChange={(e) =>
                setNewRecipe({ ...newRecipe, cuisine: e.target.value })
              }
            />
          </Col>
        </Form.Group>

        {/* BUTTONS */}
        <div className="d-flex justify-content-between">
          <Button type="submit" variant="primary">
            Save Changes
          </Button>

          <Button variant="danger" onClick={deleteRecipe}>
            Delete Recipe
          </Button>
        </div>
      </Form>

      {/* SUCCESS POPUP */}
      <Modal show={showModal} onHide={() => navigate("/")}>
        <Modal.Header closeButton>
          <Modal.Title>Recipe Updated!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your recipe has been successfully updated.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => navigate("/")}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Updatereceipe;
