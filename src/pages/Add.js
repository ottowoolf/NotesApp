import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import uniqid from "uniqid";
import { useHistory } from "react-router-dom";

export const Add = ({ setNotes }) => {
  const [form, setForm] = useState({ title: "", text: "" });
  const [id, setId] = useState(uniqid());

  const history = useHistory();
  
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value, id });
    console.log(form);
  };
  const addNote = () => {
    if (form.title.trim() !== "" || form.text.trim() !== "") {
      setNotes((note) => [...note, form]);
      setId(uniqid());
      setForm({ title: "", text: "" });
      history.push("/");
    }
  };
  return (
    <React.Fragment>
      <Container>
        <Form className='mt-3 w-50'>
          <Form.Group controlId='formBasicEmail'>
            <Form.Control
              onChange={handleChange}
              value={form.title}
              name='title'
              type='title'
              placeholder='Enter title...'
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Text</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={form.text}
              name='text'
              as='textarea'
              placeholder='Text...'
            />
          </Form.Group>
        </Form>
        <button onClick={addNote} className='btn btn-dark'>
          Add
        </button>
      </Container>
    </React.Fragment>
  );
};
