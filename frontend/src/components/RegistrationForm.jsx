import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { useHistory, useRouteMatch } from 'react-router-dom'
// import url from '../baseURL'

// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(5),
//       width: theme.spacing(25),
//       height: theme.spacing(16),
//     },
//   },
// }))

const RegistrationForm = () => {
  // const classes = useStyles()
  const initState = { username: '', email: '', password: '' }
  const history = useHistory()
  // const match = useRouteMatch()
  const [state, setState] = useState(initState)

  // This is a newly registered user that needs to be saved in the database
  const handleSubmit = async (e) => {
    e.preventDefault()

    // const response = await url.post('/api/users/register', {
    //   state,
    // })

    // Only do the following if the registration is successful
    // ******************************************************* //

    // clear the screen after form submition
    setState(initState)

    // go to the login screen after registering
    history.push('/login')
  }

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value })
  }

  return (
    <Container className='component' maxWidth='sm'>
      <form onSubmit={handleSubmit}>
        <h1 className='form-heading'>Registration Form</h1>
        <br />

        <div>
          {/* username */}
          <label>Username</label>&nbsp;
          <input
            className='form-control'
            type='text'
            name='username'
            value={state.username}
            onChange={handleChange}
          />
        </div>

        <div>
          {/* Email */}
          <label>Email address</label>&nbsp;
          <input
            className='form-control'
            type='email'
            name='email'
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <br />

        <div>
          {/* Password */}
          <label>Password</label>&nbsp;
          <input
            className='form-control'
            type='password'
            name='password'
            value={state.password}
            onChange={handleChange}
          />
          {/* Validate Psword */}
          <label>Validate Password</label>&nbsp;
          <input
            className='form-control'
            type='password'
            name='validatePassword'
            value={state.validatePassword}
            onChange={handleChange}
          />
        </div>

        <Button
          style={{ marginTop: '10px' }}
          variant='contained'
          color='primary'>
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default RegistrationForm
