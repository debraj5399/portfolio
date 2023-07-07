import React, { useState } from 'react';
import { Input, Button, Card, Textarea } from '@nextui-org/react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 'auto',
  marginBottom:"10rem"
};

const cardStyle = {
  width: '400px',
  padding: '2rem',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

function Contact() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [queries, setQueries] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform submission logic here, such as sending the form data to a server

    // Reset form fields
    setName('');
    setPhoneNumber('');
    setEmail('');
    setQueries('');
  };

  return (
    <div style={containerStyle}>
      <h1>Contact</h1>
      <Card shadow style={cardStyle}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '2rem', marginTop: '1rem', }}>
            <Input
              clearable
              color="secondary"
              bordered
              labelPlaceholder="Name"
              initialValue=""
              width='100%'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <Input
              clearable
              color="secondary"
              bordered
              width='100%'
              labelPlaceholder="Phone Number"
              initialValue=""
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <Input
              clearable
              width='100%'
              bordered
              color="secondary"
              labelPlaceholder="Email"
              initialValue=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
          <Textarea
          bordered
          color="secondary"
          width='100%'
          labelPlaceholder="Queries"
          minRows={2}
          value={queries}
              onChange={(e) => setQueries(e.target.value)}
        />
          </div>
          <Button type="submit" auto>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Contact;
