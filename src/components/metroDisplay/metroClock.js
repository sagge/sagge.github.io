import React, { useState, useEffect } from "react"

import clockBackground from "../../images/clock_background.svg"

import styled from "styled-components"

const lightGray = "#D1CFC8"
const normalOrange = "#f67827"

const Clock = styled.div`
  width: ${props => props.metroDisplayWidth * 0.1351351351}px;
  height: ${props => props.metroDisplayWidth * 0.1351351351}px;
  border-radius: 50%;
  position: relative;
  background-image: url(${clockBackground});
  background-size: contain;
`
const ClockFace = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  background: ${lightGray};
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  z-index: 1;
`

const OuterClockFace = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  z-index: 2;
  .marking {
    content: "";
    position: absolute;
    width: ${props => props.metroDisplayWidth / 222}px;
    height: 100%;
    background: black;
    z-index: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .marking.marking-two {
    -webkit-transform: translateX(-50%) rotate(30deg);
    -moz-transform: translateX(-50%) rotate(30deg);
    transform: translateX(-50%) rotate(30deg);
  }

  .marking.marking-three {
    -webkit-transform: translateX(-50%) rotate(60deg);
    -moz-transform: translateX(-50%) rotate(60deg);
    transform: translateX(-50%) rotate(60deg);
  }

  .marking.marking-four {
    -webkit-transform: translateX(-50%) rotate(90deg);
    -moz-transform: translateX(-50%) rotate(90deg);
    transform: translateX(-50%) rotate(90deg);
  }

  .marking.marking-five {
    -webkit-transform: translateX(-50%) rotate(120deg);
    -moz-transform: translateX(-50%) rotate(120deg);
    transform: translateX(-50%) rotate(120deg);
  }

  .marking.marking-six {
    -webkit-transform: translateX(-50%) rotate(150deg);
    -moz-transform: translateX(-50%) rotate(150deg);
    transform: translateX(-50%) rotate(150deg);
  }
`

const InnerClockFace = styled.div`
  position: absolute;
  top: 12%;
  left: 12%;
  width: 76%;
  height: 76%;
  background: ${lightGray};
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  z-index: 2;
  ::before  {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.metroDisplayWidth / 150}px;
    height: ${props => props.metroDisplayWidth / 150}px;
    border-radius: 50%;
    background: #4d4b63;
    z-index: 11;
  }
`

const Hand = styled.div`
  width: 50%;
  right: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  -webkit-clip-path: polygon(
    0% 50%,
    /* top left */ 4px 0%,
    /* top left */ 100% 0%,
    /* top right */ 100% 0%,
    /* top right */ 100% 100%,
    /* bottom right */ 100% 100%,
    /* bottom right */ 4px 100%,
    /* bottom left */ 0 50% /* bottom left */
  );
  clip-path: polygon(
    0% 50%,
    /* top left */ 4px 0%,
    /* top left */ 100% 0%,
    /* top right */ 100% 0%,
    /* top right */ 100% 100%,
    /* bottom right */ 100% 100%,
    /* bottom right */ 4px 100%,
    /* bottom left */ 0 50% /* bottom left */
  );
  transform-origin: 100%;
  transform: rotate(90deg);
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
`

const HourHand = styled(Hand)`
  width: 40%;
  z-index: 3;
  height: ${props => props.metroDisplayWidth / 166.5}px;
`

const MinuteHand = styled(Hand)`
  height: ${props => props.metroDisplayWidth / 222}px;
  z-index: 10;
  width: 55%;
`

const SecondHand = styled(Hand)`
  background: ${normalOrange};
  width: 50%;
  height: ${props => props.metroDisplayWidth / 333}px;
`

const MetroClock = ({ metroDisplayWidth }) => {
  const [secondHandStyle, setSecondHandStyle] = useState()
  const [minsHandStyle, setMinsHandStyle] = useState()
  const [hourHandStyle, setHourHandStyle] = useState()

  const setDate = () => {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = (seconds / 60) * 360 + 90
    setSecondHandStyle({
      transform: `translateY(-50%) rotate(${secondsDegrees}deg)`,
    })

    const mins = now.getMinutes()
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90
    setMinsHandStyle({
      transform: `translateY(-50%) rotate(${minsDegrees}deg)`,
    })

    const hour = now.getHours()
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90
    setHourHandStyle({
      transform: `translateY(-50%) rotate(${hourDegrees}deg)`,
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate()
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <Clock id="clock" metroDisplayWidth={metroDisplayWidth}>
      <ClockFace id="clockFace" metroDisplayWidth={metroDisplayWidth} />
      <OuterClockFace id="outerClockFace" metroDisplayWidth={metroDisplayWidth}>
        <div className="marking marking-one"></div>
        <div className="marking marking-two"></div>
        <div className="marking marking-three"></div>
        <div className="marking marking-four"></div>
        <div className="marking marking-five"></div>
        <div className="marking marking-six"></div>
        <InnerClockFace
          id="innerClockFace"
          metroDisplayWidth={metroDisplayWidth}
        >
          <HourHand style={hourHandStyle} metroDisplayWidth={metroDisplayWidth} />
          <MinuteHand style={minsHandStyle} metroDisplayWidth={metroDisplayWidth} />
          <SecondHand style={secondHandStyle} metroDisplayWidth={metroDisplayWidth} />
        </InnerClockFace>
      </OuterClockFace>
    </Clock>
  )
}

export default MetroClock
