import * as React from "react"
import PropTypes from "prop-types"
import { Row } from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/stylesheets/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer>
          <Row>
            <div>
              <h5>Links</h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sagge"
              >
                Github
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fi.linkedin.com/in/sakaripesonen"
              >
                LinkedIn
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/sakaripesonen/"
              >
                Instagram
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://aatos.app"
              >
                Aatos.
              </a>
            </div>
          </Row>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
