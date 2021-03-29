import React, { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

export const Edit = ({ notes, setNotes }) => {
  const [form, setForm] = useState({
    title: "",
    text: "",
    id: "",
  });

  useEffect(() => {
    setInitialValueOfForm();
    // eslint-disable-next-line
  }, []);
  const setInitialValueOfForm = () => {
    for (let note of notes) {
      if (note.id === id) {
        setForm({ ...note });
        return;
      }
    }
  };
  const { id } = useParams();
  const history = useHistory();
  const onSubmit = () => {
    let newNotes = notes.map((note) =>
      note.id === id ? { ...note, ...form, id } : { note }
    );
    setNotes(newNotes);
    history.push("/");
  };

  return (
    <React.Fragment>
      {/* <Container>
        
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
      </Container> */}
      <Container>
        <Form className='mt-3 w-50'>
          <Form.Group controlId='formBasicPassword'>
            <Form.Control
              type='text'
              placeholder='title'
              name='title'
              value={form.title}
              onChange={({ target }) =>
                setForm({ ...form, [target.name]: target.value })
              }
            />
            <Form.Control
              type='text'
              placeholder='text'
              name='text'
              value={form.text}
              onChange={({ target }) =>
                setForm({ ...form, [target.name]: target.value })
              }
            />
            <Button onClick={onSubmit}>Submit</Button>
          </Form.Group>
        </Form>
      </Container>
    </React.Fragment>
  );
};
