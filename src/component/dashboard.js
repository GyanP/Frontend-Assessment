import React from 'react';
import styled from 'styled-components';
import ellipse from './../ellipse.png';
import bylaws from './../bylaws.png';
import Group from './../Group.png';
import download from './../download.png';
import print from './../print.png';

const Card = styled.div`
  max-width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-bottom: 4px solid #FEDEDD;
  margin: 112px 48px;
  padding: 31px;
  position: absolute;

  &:hover & {
    .menu {
      display: block;
    }
  }
`;

const Button = styled.button`
  font-size: 10px;
  margin: 55px 0px 0px;
  padding: 1.5em 1em;
  border-radius: 3px;
  color: #8C14FC;
  border: 1px solid #8C14FC;
  width: 305px;
  border-radius: 5px;
  font-weight: 500;
  background: transparent;
  `;
  

const Block = styled.div`
  display: none;
`;

const Container = styled.div`
  ${Card}:hover ${Block} {
    display: block;
    cursor: pointer;
    border: 1px solid #F1F4F6;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: absolute;
    right: 14px;
    top: 16px;
  }
`;

const Dashboard = () => {
  const [showResults, setShowResults] = React.useState(false)

  const showMenu = () => {
    console.log("hello");
    setShowResults(!showResults);
  }

  return (
    <Container>
      <Card>
        <Block className="menu" onClick={showMenu}>
          <img src={Group} alt="Menu"/>
        </Block>
        { showResults ? <div className="dropdown-content">
          <div className="drop-dwn download">
            <img className="img-dd" src={download} alt="download"/>
            <div>Download</div>
          </div>
          <div className="drop-dwn print">
            <img className="img-dd" src={print} alt="print"/>
            <div>Print</div>
          </div>
          <div className="drop-dwn delete">
            <img className="img-dd" src={ellipse} alt="ellipse"/>
            <div>Delete</div>
          </div>
        </div> : null}
        <div className="logo">
          <img src={bylaws} alt="Logo"/>
        </div>
        <h4>Corporate Bylaws</h4>
        <div className='description'>An internal document that details the 
          operating rule for the corporation and are
          typically adapted at the organizatonal
          meeting of the board of directors.
        </div>
        <Button>View Document</Button>
      </Card>
    </Container>
  );
}

export default Dashboard;
