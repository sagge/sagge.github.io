import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Container,
  Row,
  Label,
  Button,
  FormGroup,
  Spinner,
  Navbar,
  NavbarBrand,
} from "reactstrap"
import { Formik, Form } from "formik"
import { Input } from "formstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MetroDisplay from "../components/metroDisplay/metroDisplay"

const MetroDisplayPage = () => {
  const [displayText, setDisplayText] = useState({
    topRow: "Display",
    bottomRow: "Disconnected",
  })
  const [apiError, setApiError] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setBottomRow("YO MAN 8===D")
  //   }, 5000)
  //   setTimeout(() => {
  //     setTopRow("Kikkeli on")
  //     setBottomRow("paras")
  //   }, 8000)
  //   setTimeout(() => {
  //     setTopRow("<3 <3 <3 <3 <3")
  //     setBottomRow("<3 <3 <3 ")
  //   }, 13000)
  // }, [])

  const initialValues = {
    firstRow: "",
    secondRow: "",
  }

  const timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const onSubmit = async (values, { setSubmitting }) => {
    setApiError(false)
    await timeout(1000)
    setDisplayText({ topRow: values.firstRow, bottomRow: values.secondRow })
    setSubmitting(false)
    setApiError(true)
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
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({
              isSubmitting,
              /* also values, errors, touched, handleChange, handleBlur, handleSubmit and other stuff available */
            }) => (
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
                  {apiError && (
                    <p style={{ color: "red", margin: 0, fontSize: "16px" }}>
                      Display disconnected, failed to send the message
                    </p>
                  )}
                </FormGroup>
              </Form>
            )}
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
          />
        </Row>
      </Container>
    </Layout>
  )
}

export default MetroDisplayPage
