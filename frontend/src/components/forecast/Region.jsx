import { Fragment } from 'react'
import Container from '@material-ui/core/Container'
import { dayDateTime } from '../../utilities/TimeConverter'

import Daily from './Daily'
import Hourly from './Hourly'

const Region = () => {
  return (
    <Container className='component' id='forecast'>
      <Fragment>
        <section id='region-left'>
          <h2 id='region'>Kingsbridge</h2>
          <p>{dayDateTime()}</p>
          <br />

          <section id='hi-low'>
            <img src='cloud' alt='skies' />
            <p>High</p>/<p>Low</p>
          </section>

          <section id='temp'>
            <p>53&deg;</p>
            <p>RealFeel 52&deg;</p>
          </section>

          <section id='weather'>Rain</section>
        </section>
      </Fragment>
      <section id='daily-hourly'>
        <span id='hourly'>
          <Hourly />
        </span>

        <span id='daily'>
          <Daily />
        </span>
      </section>
    </Container>
  )
}

export default Region
