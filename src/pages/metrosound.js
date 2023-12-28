import "./metrosound.scss"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  Container,
  Row,
  Label,
  Button,
  FormGroup,
  Spinner,
  Navbar,
} from "reactstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MetroSoundPage = () => {
  const [disabledButton, setDisabledButton] = useState(undefined)
  const [error, setError] = useState(undefined)

  const onClick = async buttonValue => {
    if (disabledButton) return

    setError(undefined)
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buttonValue }),
    }
    setDisabledButton(buttonValue)

    fetch("https://sakari.nerdclub.dy.fi/sound", requestOptions)
      .then(res => res.json())
      .then(
        result => {
          console.log("Sound played successfully")
        },
        error => {
          setError("Error in display connection, failed to play the sound")
        }
      )

    // Keep the button disabled for 8 seconds
    setTimeout(() => setDisabledButton(undefined), 8000)
  }

  const MetroButton = ({ buttonText, buttonValue }) => {
    return (
      <button
        class="metroButton"
        onClick={() => onClick(buttonValue)}
        disabled={disabledButton === buttonValue}
      >
        {buttonText}
        {disabledButton === buttonValue && <span>🔊</span>}
      </button>
    )
  }

  return (
    <Layout>
      <Seo
        title="Sakari Pesonen - Metro display"
        description="Send a message to my metro display!"
      />
      <Navbar className="page-navbar" color="light" expand="md" light>
        <Link className="navbar-link" to="/">
          &#60;
        </Link>
      </Navbar>
      <Container style={{ marginBottom: "6em" }}>
        <Row className="max-width metro-top-row">
          <h1>📢 Play a sound on my metro station display!</h1>
          <p>
            The display is located in my living room acting as a TV stand and I
            will be disturbed when I'm at home.
          </p>
        </Row>
        <div
          className="max-width"
          style={{
            paddingTop: "2em",
            display: "flex",
            flexFlow: "row wrap",
          }}
        >
          <MetroButton buttonText="Vuosaari" buttonValue="VS" />
          <MetroButton buttonText="Mellunmäki" buttonValue="MM" />
          <MetroButton buttonText="Itäkeskus" buttonValue="IK" />
          <MetroButton buttonText="Kamppi" buttonValue="KP" />
          <MetroButton buttonText="Ruoholahti" buttonValue="RL" />
          <MetroButton buttonText="Ei matkustajia" buttonValue="S1" />
          {error && (
            <div style={{ width: "100%" }}>
              <p style={{ color: "red", margin: 0, fontSize: "16px" }}>
                {error}
              </p>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  )
}

// IK. KP. MM. RL. S1. VS.

export default MetroSoundPage
