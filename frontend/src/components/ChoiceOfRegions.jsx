import React, { Component } from 'react'
import { Button} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import url from '../baseURL'
import Container from '@material-ui/core/Container'

/* email will be taken from local storage or db
and cannot be edited by user on this form */
let userInfo = localStorage.getItem("userInfo")
const { email } = userInfo ? JSON.parse(userInfo) : ''
const initState = {
  email: email,
  zipCode: ''
}

class ChoiceOfRegion extends Component {
  constructor(props) {
    super(props)
    this.state = (initState)
    
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  onFormSubmit = async (e) => {
    e.preventDefault()

    // save the emailaddress and zipcode to the database
    const response = await url.post('/api/users-zipcode/create-zipcode', {
      email: this.state.email,
      zipCode: this.state.zipCode
    })

    // clear the screen
    this.setState(initState)
    }
    
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
    
    render() {
      // any user calling this page without being logged in
      // should be sent to the login page
      if (!this.state.email) this.props.history.push('/login');
      
      return (
      <Container className='component'>
        <form onSubmit={this.onFormSubmit}>
          <h3>Add a Zip Code</h3><br />
          <div>
            <div xs={6} md={4}>
              <div className="form-group">
                <div>Email address</div>
                {/* email is displayed for logged in user and cannot be edited */}
                <div type="email"
                  className="form-control"
                  value={this.state.email}
                  disabled
                />
              </div>
            </div>
          </div>

          <div>
            <div xs={2} md={2}>
              <div className="form-group">
                <label>Zip Code</label>

                <div type="text"
                  className="form-control"
                  id="zipCode"
                  name="zipCode"
                  value={this.state.zipCode}
                  onChange={this.handleChange}
                  placeholder="Zip Code"
                />
              </div><br />
            </div>
          </div>

          <div>
            <div>
              <Button type="submit" variant="primary">Submit</Button>
            </div>
          </div>
        </form>
      </Container>
    )
  }
}

export default withRouter(ChoiceOfRegion)