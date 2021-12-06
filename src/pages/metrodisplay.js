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
import { Formik, Form } from "formik"
import { Input } from "../components/customInput"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MetroDisplay from "../components/metroDisplay/metroDisplay"

const TestContainer = styled.div`
  position: absolute;
  visibility: hidden;
  background: red;
  height: auto;
  width: auto;
  white-space: nowrap;
  font-family: "MetroFont";
  font-size: ${props => props.metroDisplayWidth * 0.031}px;
`

const MetroDisplayPage = () => {
  const [metroDisplayWidth, setMetroDisplayWidth] = useState(0)
  const [displayText, setDisplayText] = useState({
    topRow: "Display",
    bottomRow: "Disconnected",
  })
  const [error, setError] = useState(undefined)

  useEffect(() => {
    fetch("https://sakari.nerdclub.dy.fi/")
      .then(res => res.json())
      .then(
        result => {
          setDisplayText({ topRow: result[1], bottomRow: result[2] })
        },
        error => {
          setError("Display disconnected, failed to fetch the data")
        }
      )
  }, [])

  const initialValues = {
    firstRow: "",
    secondRow: "",
  }

  const validate = values => {
    const errors = {}

    const topContainer = document.getElementById("display-row-top")
    const topContainerWidth = topContainer.clientWidth
    document.getElementById("FirstRowTest").innerHTML = values.firstRow
    const topText = document.getElementById("FirstRowTest")
    const topTextWidth = topText.clientWidth + 1
    if (topTextWidth > topContainerWidth * 0.815 || values.firstRow.length > 48) {
      errors.firstRow = "Text too long"
    }

    const bottomContainer = document.getElementById("display-row-bottom")
    const bottomContainerWidth = bottomContainer.clientWidth
    document.getElementById("SecondRowTest").innerHTML = values.secondRow
    const bottomText = document.getElementById("SecondRowTest")
    const bottomTextWidth = bottomText.clientWidth + 1
    if (bottomTextWidth > bottomContainerWidth * 0.815 || values.secondRow.length > 48) {
      errors.secondRow = "Text too long"
    }

    return errors
  }

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setError(undefined)
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 1: values.firstRow, 2: values.secondRow }),
    }
    fetch("https://sakari.nerdclub.dy.fi/", requestOptions)
      .then(res => res.json())
      .then(
        result => {
          setDisplayText({ topRow: result[1], bottomRow: result[2] })
          resetForm()
        },
        error => {
          setSubmitting(false)
          setError("Error in display connection, failed to send the message")
        }
      )
    setSubmitting(false)
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
          <h1>📬 Send a message to my metro station display!</h1>
          <p>
            The display is located in my living room acting as a TV stand and I
            will see your message when I'm at home.
          </p>
        </Row>
        <Row className="max-width" style={{ marginTop: "0.5em" }}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
            validateOnChange
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <FormGroup>
                    <Label>Your message:</Label>
                    <Input
                      className="input-row upper"
                      type="text"
                      name="firstRow"
                      placeholder="Upper row"
                    />
                    <Input
                      className="input-row bottom"
                      type="text"
                      name="secondRow"
                      placeholder="Bottom row"
                    />
                  </FormGroup>
                  <FormGroup style={{ marginTop: "0.5em" }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: "160px",
                        fontFamily: "MetroFont",
                        fontWeight: "unset",
                        marginBottom: 0,
                      }}
                    >
                      {isSubmitting && (
                        <>
                          <Spinner size="sm" color="light">
                            {" "}
                          </Spinner>{" "}
                        </>
                      )}
                      Send!
                    </Button>
                    {error && (
                      <p style={{ color: "red", margin: 0, fontSize: "16px" }}>
                        {error}
                      </p>
                    )}
                    <TestContainer
                      id="FirstRowTest"
                      metroDisplayWidth={metroDisplayWidth}
                    />
                    <TestContainer
                      id="SecondRowTest"
                      metroDisplayWidth={metroDisplayWidth}
                    />
                  </FormGroup>
                </Form>
              )
            }}
          </Formik>
        </Row>
        <Row
          className="max-width"
          style={{
            maxWidth: "900px",
            marginTop: "1em",
          }}
        >
          <MetroDisplay
            topRow={displayText.topRow}
            bottomRow={displayText.bottomRow}
            metroDisplayWidth={metroDisplayWidth}
            setMetroDisplayWidth={setMetroDisplayWidth}
          />
        </Row>
      </Container>
    </Layout>
  )
}

export default MetroDisplayPage
