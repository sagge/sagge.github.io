import * as React from "react"
import { Link } from "gatsby"
import { Navbar, NavbarBrand, Container, Row } from "reactstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Navbar color="light" expand="md" light>
      <Link className="navbar-link" to="/">
        &#60;
      </Link>
    </Navbar>
    <Container style={{ marginBottom: "6em" }}>
      <Row className="max-width" style={{ marginTop: "4em" }}>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
