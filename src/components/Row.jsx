import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Row = ({ notes, setNotes }) => {
  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };
  return (
    <React.Fragment>
      <Container className='mt-3 p-3 '>
        {notes.map((note) => (
          <Card key={note.id} className=''>
            <Card.Header className='d-flex justify-content-between'>
              {note.title}{" "}
              <div>
                <Link className='mr-3' to={`edit/${note.id}`}>
                  <i class='fas fa-edit'></i>
                </Link>
                <Button>
                  <i
                    class='fas fa-trash'
                    onClick={() => deleteNote(note.id)}
                  ></i>
                </Button>
              </div>
            </Card.Header>
            <Card.Text className='m-3'>{note.text}</Card.Text>
          </Card>
        ))}
      </Container>
    </React.Fragment>
  );
};
