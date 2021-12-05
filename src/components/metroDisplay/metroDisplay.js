import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import MetroClock from "./metroClock"
import aegLogo from "../../images/aeg.svg"

const metroOrange = "#FD4F00"
const normalOrange = "#f67827"
const lightGray = "#D1CFC8"
const darkGray = "#A09E96"

const MetroDisplayTopVentilation = styled.div`
  position: relative;
  display: flex;
  width: 100%; // 222:50
  padding-top: ${props => props.metroDisplayWidth * 0.07567567568}px;
`

const MetroDisplayVent = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: ${props => props.metroDisplayWidth / 74}px;
  height: ${props => props.metroDisplayWidth / 277.5}px;
  background: linear-gradient(#331000, ${metroOrange});
  &.left {
    left: 10.6%;
  }
  &.center {
    left: calc(50% - ${props => props.metroDisplayWidth / 148}px);
  }
  &.right {
    right: 10.6%;
  }
  ::before {
    position: absolute;
    content: "";
    background: ${metroOrange};
    width: ${props => props.metroDisplayWidth * 0.02072072}px;
    left: ${props => props.metroDisplayWidth / -277.5}px;
    height: ${props => props.metroDisplayWidth / 222}px;
    top: ${props => props.metroDisplayWidth / -222}px;
    border-radius: ${props => props.metroDisplayWidth / 222}px
      ${props => props.metroDisplayWidth / 222}px 0 0;
  }
`

const MetroDisplayFixing = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: ${props => props.metroDisplayWidth * 0.065315315}px;
  height: ${props => props.metroDisplayWidth / 277.5}px;
  background: black;
  &.left {
    left: 25.6%;
  }
  &.right {
    right: 25.6%;
  }
`

const FixingSlate = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: ${props => props.metroDisplayWidth / 185}px;
  top: ${props => props.metroDisplayWidth / -185}px;
  background-image: -webkit-repeating-linear-gradient(
      hsla(0, 0%, 100%, 0) 0%,
      hsla(0, 0%, 100%, 0) 6%,
      hsla(0, 0%, 100%, 0.1) 7.5%
    ),
    -webkit-repeating-linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0)
          4%, hsla(0, 0%, 0%, 0.03) 4.5%),
    -webkit-repeating-linear-gradient(hsla(0, 0%, 100%, 0) 0%, hsla(
            0,
            0%,
            100%,
            0
          )
          1.2%, hsla(0, 0%, 100%, 0.15) 2.2%),
    linear-gradient(
      90deg,
      hsl(0, 0%, 78%) 0%,
      hsl(0, 0%, 84%) 47%,
      hsl(0, 0%, 78%) 53%,
      hsl(0, 0%, 70%) 100%
    );
  &.left {
    left: 25.6%;
  }
  &.right {
    right: 25.6%;
  }
`

const Nut = styled.div`
  position: absolute;
  display: flex;
  border-radius: ${props => props.metroDisplayWidth / 800}px;
  width: ${props => props.metroDisplayWidth / 82}px;
  height: ${props => props.metroDisplayWidth / 148}px;
  top: ${props => props.metroDisplayWidth / -148}px;
  background-image: -webkit-repeating-linear-gradient(
      hsla(0, 0%, 100%, 0) 0%,
      hsla(0, 0%, 100%, 0) 6%,
      hsla(0, 0%, 100%, 0.1) 7.5%
    ),
    -webkit-repeating-linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0)
          4%, hsla(0, 0%, 0%, 0.03) 4.5%),
    -webkit-repeating-linear-gradient(hsla(0, 0%, 100%, 0) 0%, hsla(
            0,
            0%,
            100%,
            0
          )
          1.2%, hsla(0, 0%, 100%, 0.15) 2.2%),
    linear-gradient(
      90deg,
      hsl(0, 0%, 70%) 0%,
      hsl(0, 0%, 81%) 28%,
      hsl(0, 0%, 70%) 36%,
      hsl(0, 0%, 81%) 63%,
      hsl(0, 0%, 70%) 71%,
      hsl(0, 0%, 67%) 100%
    );
  &.left {
    left: 13%;
  }
  &.right {
    right: 13%;
  }
`
const Rod = styled.div`
  position: absolute;
  display: flex;
  width: ${props => props.metroDisplayWidth / 50}px;
  height: ${props => props.metroDisplayWidth / 15}px;
  top: ${props => props.metroDisplayWidth / -15}px;
  left: 50%;
  transform: translate(-50%, 0);
  background-image: -webkit-repeating-linear-gradient(
      hsla(0, 0%, 100%, 0) 0%,
      hsla(0, 0%, 100%, 0) 6%,
      hsla(0, 0%, 100%, 0.1) 7.5%
    ),
    -webkit-repeating-linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0)
          4%, hsla(0, 0%, 0%, 0.03) 4.5%),
    -webkit-repeating-linear-gradient(hsla(0, 0%, 100%, 0) 0%, hsla(
            0,
            0%,
            100%,
            0
          )
          1.2%, hsla(0, 0%, 100%, 0.15) 2.2%),
    linear-gradient(
      90deg,
      hsl(0, 0%, 78%) 0%,
      hsl(0, 0%, 84%) 47%,
      hsl(0, 0%, 78%) 53%,
      hsl(0, 0%, 70%) 100%
    );
  mask-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`

const MetroDisplayContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%; // 222:50
  padding-top: 22.522522%;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.metroDisplayWidth * 0.031}px;
`

// 28.7

const MetroDisplayFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  border-radius: 1px;
  width: 77.477477%;
  height: 100%;
  background: black;
  border: 1px solid ${metroOrange};
  align-items: center;
  justify-content: center;
  padding: ${props => props.metroDisplayWidth * 0.01051051051}px;
`

const MetroDisplayBackgroundBorder = styled.div`
  padding: ${props => props.metroDisplayWidth / 83.25}px;
  background-image: radial-gradient(black 40%, transparent 40%),
    radial-gradient(black 40%, transparent 40%);
  background-color: ${lightGray};
  background-position: 0 0,
    ${props => props.metroDisplayWidth / 266.4}px
      ${props => props.metroDisplayWidth / 266.4}px;
  background-size: ${props => props.metroDisplayWidth / 133.2}px
    ${props => props.metroDisplayWidth / 133.2}px;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 ${props => props.metroDisplayWidth / 133.2}px
    ${props => props.metroDisplayWidth / 266.4}px black;
`

const DisplayBackground = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${lightGray};
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 ${props => props.metroDisplayWidth / 444}px
      ${props => props.metroDisplayWidth / 444}px ${lightGray},
    inset 0px ${props => props.metroDisplayWidth / 44.4}px
      ${props => props.metroDisplayWidth / 44.4}px
      ${props => props.metroDisplayWidth / -66.6}px #ffff66,
    inset 0px ${props => props.metroDisplayWidth / -44.4}px
      ${props => props.metroDisplayWidth / 44.4}px
      ${props => props.metroDisplayWidth / -66.6}px #ffff66;
  ::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: ${props => props.metroDisplayWidth / -222}px;
    z-index: 0;
    box-shadow: 0px 0px ${props => props.metroDisplayWidth / 44.4}px
      ${props => props.metroDisplayWidth / 133.2}px black;
  }
  ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    right: ${props => props.metroDisplayWidth / -222}px;
    z-index: 0;
    box-shadow: 0px 0px ${props => props.metroDisplayWidth / 44.4}px
      ${props => props.metroDisplayWidth / 133.2}px black;
  }
`

const DisplayRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

const DisplayRow = styled.div`
  display: flex;
  position: relative;
  width: ${props => props.metroDisplayWidth * 0.6531531532}px;
  height: ${props => props.metroDisplayWidth * 0.03153153153}px;

  background: linear-gradient(
    to right,
    gray ${props => props.metroDisplayWidth * 0.0015}px,
    ${darkGray} ${props => props.metroDisplayWidth * 0.0015}px
  );
  background-size: ${props => props.metroDisplayWidth * 0.1306306306}px;
  background-position: ${props => props.metroDisplayWidth * -0.00075}px;

  align-items: center;
  margin-bottom: ${props =>
    props.marginBottom && props.metroDisplayWidth * 0.02387387387 + "px"};
  white-space: nowrap;
  overflow: hidden;
  padding-left: 18.5%;
  p {
    margin: 0;
    font-family: "MetroFont";
  }
  .static {
    position: absolute;
    left: 3.7%;
  }
  .narrow {
    letter-spacing: ${props => props.metroDisplayWidth / -214}px;
    left: 0%;
  }
`

const MetroClockFrame = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  border-radius: 1px;
  width: 22.522523%;
  height: 100%;
  background: black;
  border: 1px solid ${metroOrange};
  align-items: center;
  justify-content: center;
  padding: ${props => props.metroDisplayWidth * 0.01051051051}px;
`

const TrackText = styled.div`
  position: absolute;
  bottom: ${props => props.metroDisplayWidth * 0.03}px;
  left: ${props => props.metroDisplayWidth * 0.02702702703}px;
  font-family: Arial, Helvetica, sans-serif;
  > p {
    font-size: ${props => props.metroDisplayWidth * 0.01801801802}px;
    margin: 0;
    color: ${normalOrange};
    font-weight: 600;
  }
`
const AegLogoWrapper = styled.div`
  position: absolute;
  bottom: ${props => props.metroDisplayWidth / 225}px;
  right: ${props => props.metroDisplayWidth / 37.5}px;
  width: ${props => props.metroDisplayWidth / 50}px;
  line-height: 0;
`

const MetroDisplay = ({ topRow, bottomRow, metroDisplayWidth, setMetroDisplayWidth }) => {
  const metroDisplayRef = useRef()

  useEffect(() => {
    const updateSize = () => {
      const displayWidth = metroDisplayRef.current.clientWidth
      if (displayWidth) {
        setMetroDisplayWidth(displayWidth)
      }
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [setMetroDisplayWidth])

  return (
    <div style={{ width: "100%" }}>
      <MetroDisplayTopVentilation metroDisplayWidth={metroDisplayWidth}>
        <MetroDisplayVent
          className="left"
          metroDisplayWidth={metroDisplayWidth}
        />
        <MetroDisplayFixing
          className="left"
          metroDisplayWidth={metroDisplayWidth}
        >
          <FixingSlate metroDisplayWidth={metroDisplayWidth}>
            <Nut className="left" metroDisplayWidth={metroDisplayWidth} />
            <Rod metroDisplayWidth={metroDisplayWidth} />
            <Nut className="right" metroDisplayWidth={metroDisplayWidth} />
          </FixingSlate>
        </MetroDisplayFixing>
        <MetroDisplayVent
          className="center"
          metroDisplayWidth={metroDisplayWidth}
        />
        <MetroDisplayFixing
          className="right"
          metroDisplayWidth={metroDisplayWidth}
        >
          <FixingSlate metroDisplayWidth={metroDisplayWidth}>
            <Nut className="left" metroDisplayWidth={metroDisplayWidth} />
            <Rod metroDisplayWidth={metroDisplayWidth} />
            <Nut className="right" metroDisplayWidth={metroDisplayWidth} />
          </FixingSlate>
        </MetroDisplayFixing>
        <MetroDisplayVent
          className="right"
          metroDisplayWidth={metroDisplayWidth}
        />
      </MetroDisplayTopVentilation>
      <MetroDisplayContainer
        ref={metroDisplayRef}
        metroDisplayWidth={metroDisplayWidth}
      >
        <MetroDisplayFrame metroDisplayWidth={metroDisplayWidth}>
          <MetroDisplayBackgroundBorder metroDisplayWidth={metroDisplayWidth}>
            <DisplayBackground metroDisplayWidth={metroDisplayWidth}>
              <DisplayRowWrapper>
                <DisplayRow
                  id="display-row-top"
                  metroDisplayWidth={metroDisplayWidth}
                  marginBottom={true}
                >
                  <p className="static">0:12</p>
                  <p>{topRow}</p>
                </DisplayRow>
                <DisplayRow
                  id="display-row-bottom"
                  metroDisplayWidth={metroDisplayWidth}
                >
                  <p className="static narrow">
                    &#123;&#125;&#123;&#125;&#124;&#126;
                  </p>
                  <p>{bottomRow}</p>
                </DisplayRow>
              </DisplayRowWrapper>
            </DisplayBackground>
          </MetroDisplayBackgroundBorder>
          <TrackText metroDisplayWidth={metroDisplayWidth}>
            <p>Raide 3 Spår</p>
          </TrackText>
          <AegLogoWrapper metroDisplayWidth={metroDisplayWidth}>
            <img src={aegLogo} alt="AEG_logo" width="100%" />
          </AegLogoWrapper>
        </MetroDisplayFrame>
        <MetroClockFrame metroDisplayWidth={metroDisplayWidth}>
          <MetroDisplayBackgroundBorder metroDisplayWidth={metroDisplayWidth}>
            <DisplayBackground metroDisplayWidth={metroDisplayWidth}>
              <MetroClock metroDisplayWidth={metroDisplayWidth} />
            </DisplayBackground>
          </MetroDisplayBackgroundBorder>
        </MetroClockFrame>
      </MetroDisplayContainer>
    </div>
  )
}

export default MetroDisplay
