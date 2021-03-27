import { useState } from 'react'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import Container from '@material-ui/core/Container'
// import url from '../baseURL'

const initState = { username: '', password: '' }

const LoginForm = () => {
  const [state, setState] = useState(initState)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    // const response = await url.post('/api/users/login', {
    //   username,
    //   password
    // })

    // if (response.data) {   // save the user's info for further use
    //   localStorage.setItem("userInfo", JSON.stringify(response.data));
    // }

    // clear the screen after form submition
    // setState(initState)

    // testing ***************
    // testing ***************

    // const regionCount = 1;

    // testing ***************
    // testing ****************

    /* if the user already has selected regions, display the screen 
    with the weather forcasts. Otherwise, displsy ChoiceOfRegions */
    // if (regionCount > 0) {
    //   this.props.history.push('/forecast');
    //   window.location.reload()
    // } else {
    //   this.props.history.push('/regions');
    // }
  }

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value })
  }

  return (
    <Container className='component' maxWidth='sm'>
      <form onSubmit={onFormSubmit} autoComplete='off'>
        <h1 className='form-heading'>Login</h1>
        <br />
        <div>
          <label>Login Id</label>&nbsp;

          <input
            type='text'
            className='form-control'
            id='username'
            name='username'
            value={state.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password</label>&nbsp;

          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={state.password}
            onChange={handleChange}
            placeholder='********'
          />
        </div>

        <div>
          <Button variant='contained' color='primary'>
            Submit
          </Button>
          <br />
        </div>
        <br />

        {/* route to the registration form */}
        <div>
          <NavLink className='d-inline p-2 text-white' to='/registration'>
            Not registered?
          </NavLink>
        </div>
      </form>
    </Container>
  )
}

export default LoginForm
