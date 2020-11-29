import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function User() {
  const [state, setstate] = React.useState('');
  const history = useHistory();
  return (
    <>
      <h1>Search</h1>
      <FormControl fullWidth className="">
        <InputLabel htmlFor="github-user">Search by Github Username</InputLabel>
        <Input
          id="github-user"
          value={state}
          onChange={(e) => setstate(e.target.value)}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '5px' }}
        onClick={() => {
          history.push(`/user/${state}`);
        }}
      >
        Search
      </Button>
    </>
  );
}
