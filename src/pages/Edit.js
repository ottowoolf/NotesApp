import React, { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Edit = ({ notes, setNotes }) => {
  const [form, setForm] = useState({
    title: "",
    text: "",
    id: "",
  });
  const { id } = useParams();

  useEffect(() => {
    let index = notes.find((n) => n.id === id);
    let selectedNote = notes[index];
    console.log(notes[index]);
    console.log(id);
    console.log(selectedNote);
    setForm(selectedNote);
  }, [id, notes]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value, id });
    console.log(form);
  };

  const saveNote = () => {
    if (form.title.trim() !== "" || form.text.trim() !== "") {
      setNotes((note) => {
        // return array - with the object of /id/ modified
        let index = note.find((n) => n.id === id);
        let newNotes = [...note];
        newNotes[index] = form;
        console.log(newNotes[index]);
        return newNotes[index];
      });
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
              type='text'
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Control
              onChange={handleChange}
              value={form.text}
              name='text'
              as='textarea'
              cols='30'
              rows='10'
            />
          </Form.Group>
        </Form>
        <Button onClick={saveNote} className='btn btn-success'>
          Save
        </Button>
      </Container>
    </React.Fragment>
  );
};
