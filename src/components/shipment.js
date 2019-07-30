import React, { Component } from "react"

const Cargo = ({ type, description, volume }) => (
  <tr>
    <td>{type}</td>
    <td>{description}</td>
    <td>{volume}</td>
  </tr>
)

const Service = ({ type, value }) => (
  <tr>
    <td>{type}</td>
    <td>{value}</td>
  </tr>
)

class Shipment extends Component {
  render() {
    const {
      id,
      name,
      cargo,
      mode,
      type,
      destination,
      origin,
      services,
      total,
      status,
      userId,
    } = this.props
    const cargos = cargo.map((c, i) => <Cargo key={i} {...c} />)
    const service_rows = services.map((service, i) => <Service key={i} {...service} />)
    return (

 <fieldset>
  <legend>{id} - {name}</legend>
  <address>

        <div style={{ float: "left" }}>mode={mode}</div>
        <div style={{ float: "left" }}>type={type}</div>
        <div>origin={origin}</div>
        <div>destination={destination}</div>
        <div>total={total}</div>
        <span>status={status}</span>
        <div>userId={userId}</div>
        <h2 style={{ float: "left" }}>Cargos:</h2>
        </address>
        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Volume</th>
            </tr>
            {cargos}
          </tbody>
        </table>
        <h2 style={{ float: "left" }}>Services:</h2>
        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Value</th>
            </tr>
            {service_rows}
          </tbody>
        </table>
        </fieldset>

    )
  }
}

export default Shipment
