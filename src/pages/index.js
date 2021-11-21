import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col } from "reactstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Sakari Pesonen - Homepage" />
    <Row>
      <Col
        className="bio-col"
        xs={{ size: 12, order: 2 }}
        sm={{ size: 12, order: 2 }}
        md={{ size: 12, order: 2 }}
        lg={{ size: 6, order: 1 }}
      >
        <div className="bio-container">
          <h2 style={{ marginBottom: "18px" }}>👋 I'm Sakari Pesonen,</h2>
          <p>
            a co-founder of{" "}
            <a
              className="aatos-logo"
              target="_blank"
              rel="noopener noreferrer"
              href="https://aatos.app"
            >
              aatos.
            </a>
            , a private pilot, an M.Sc. and a diehard can-do person based in
            Helsinki. Exploring, experimenting and always learning. I like
            building things, from surfboards to CNC milling machines and if
            something breaks, I’ll always find a way to fix it. On my spare time
            I like to perfect my pizza making skills 🍕
          </p>
          <p>
            Want to chat? Contact me on{" "}
            <b>
              <a
                className="gradient-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://fi.linkedin.com/in/sakaripesonen"
              >
                LinkedIn
              </a>
            </b>
            , send me an{" "}
            <b>
              <a
                className="gradient-link"
                href="mailto:pesonen.sakari@gmail.com"
              >
                Email
              </a>
            </b>{" "}
            or drop a message to my old{" "}
            <Link to="/metrodisplay/" className="gradient-link">
              <b>metro station display</b>
            </Link>
            .
          </p>
        </div>
      </Col>
      <Col
        xs={{ size: 12, order: 1 }}
        sm={{ size: 12, order: 1 }}
        md={{ size: 12, order: 1 }}
        lg={{ size: 6, order: 2 }}
        style={{ padding: 0 }}
      >
        <div className="avatar-wrapper">
          <StaticImage
            src="../images/big_avatar.jpg"
            quality={100}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            alt="avatar"
            className="avatar"
          />
        </div>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
