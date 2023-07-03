import React from 'react';
import YellowStar from '../svgs/YellowStar.svg';
import OrangeStar from '../svgs/OrangeStar.svg';
import BlueStar from '../svgs/BlueStar.svg';
import RedStar from '../svgs/RedStar.svg';
import Teacher from '../svgs/Teacher.svg';
import ArrowRightYellow from '../svgs/ArrowRightYellow.svg';
import ArrowRightOrange from '../svgs/ArrowRightOrange.svg';
import ArrowRightBlue from '../svgs/ArrowRightBlue.svg';
import ArrowRightRed from '../svgs/ArrowRightRed.svg';
import LeftArrowYellow from '../svgs/LeftArrowYellow.svg';
import LeftArrowOrange from '../svgs/LeftArrowOrange.svg';
import LeftArrowBlue from '../svgs/LeftArrowBlue.svg';
import LeftArrowRed from '../svgs/LeftArrowRed.svg';
import YellowSemiCircle from '../svgs/YellowSemicircle.svg';
import OrangeSemiCircle from '../svgs/OrangeSemicircle.svg';
import BlueSemiCircle from '../svgs/BlueSemicircle.svg';
import RedSemiCircle from '../svgs/RedSemicircle.svg';
import '../Styles/MethodologyCard.css';

const MethodologyCard = (props) => {
  let star,firstLine,secondLine,thirdLine,fourthLine,ArrowRight,SemiCircle,ArrowLeft;

  switch (props.colorName) {
    case '#FCD444':
      star = <img src={YellowStar} alt="Style Element" />;
      firstLine="EXP. & QUALIFIED FACULTY TEAM";
      secondLine="⦿ Faculty team from IITs, NITs, and top Colleges";
      thirdLine="⦿ Average experience is more than 8 years.";
      fourthLine="⦿ Vast experience of teaching thousands of students.";
      ArrowRight=<img src={ArrowRightYellow} alt="Style Element" />;
      ArrowLeft=<img src={LeftArrowYellow} alt="Style Element" />;
      SemiCircle=<img src={YellowSemiCircle} alt="Style Element" />;
      break;
    case '#FC8844':
      star = <img src={OrangeStar} alt="Style Element" />;
      firstLine="STATE OF ART INFRASTRUCTURE";
      secondLine="⦿ KVPY, Olympiads (HBCSE) Preparation.";
      thirdLine="⦿ BOARD EXAM preparation for X and XII classes.";
      fourthLine="⦿ NTSE, IJSO, NMTC, PRMO, NSEJS Preparations. ";
      ArrowRight=<img src={ArrowRightOrange} alt="Style Element" />;
      ArrowLeft=<img src={LeftArrowOrange} alt="Style Element" />;
      SemiCircle=<img src={OrangeSemiCircle} alt="Style Element" />;
      break;
    case '#44A2FC':
      star = <img src={BlueStar} alt="Style Element" />;
      firstLine="BOARD/COMP. EXAM SUPPORT";
      secondLine="⦿ Faculty team from IITs, NITs, and top Colleges";
      thirdLine="⦿ Average experience is more than 8 years.";
      fourthLine="⦿ Vast experience of teaching thousands of students.";
      ArrowRight=<img src={ArrowRightBlue} alt="Style Element" />;
      ArrowLeft=<img src={LeftArrowBlue} alt="Style Element" />;
      SemiCircle=<img src={BlueSemiCircle} alt="Style Element" />;
      break;
      case '#FC4451':
      star = <img src={RedStar} alt="Style Element" />;
        firstLine="STUDY MATERIAL";
        secondLine="⦿ Scientifically designed Chapter Modules";
        thirdLine="⦿ Daily Practice Problem Sheets";
        fourthLine="⦿ Booklet comprising of Section wise topic.";
        ArrowRight=<img src={ArrowRightRed} alt="Style Element" />;
        ArrowLeft=<img src={LeftArrowRed} alt="Style Element" />;
        SemiCircle=<img src={RedSemiCircle} alt="Style Element" />;
        break;
    default:
      star = null;
  }

  return (
    <div className='container' style={{background: props.colorName}}>
      <div className='firsty'>
        {ArrowRight}
        <img src={Teacher} alt="Style Element"/>
        {star}
      </div>
      <div className='secondy'>
        <p className='secondy-header'>{firstLine}</p>
        <p className='actual-facilities'>{secondLine}</p>
        <p className='actual-facilities'>{thirdLine}</p>
        <p className='actual-facilities'>{fourthLine}</p>
        <br />
        <p className='learn-more'>Learn More ➡</p>
      </div>
      <div className='thirdy'>
        {SemiCircle}
        {ArrowLeft}
      </div>
    </div>
  );
}

export default MethodologyCard;
