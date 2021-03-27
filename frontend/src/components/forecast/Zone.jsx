import Container from '@material-ui/core/Container'

const Zones = () => {
  const zones = ['02101', '02126', '02136']

  return (
    <Container>
      {/* Replace the select element for a coursel later on */}
      <label>Zones</label>&nbsp;
      <select style={{width: '7rem'}}>
        {zones.map((zone) => (
          <option value={zone}>{zone}</option>
        ))}
      </select>
    </Container>
  )
}

export default Zones

// style={{ width: '7rem', background: 'none', divor: 'white' }}
