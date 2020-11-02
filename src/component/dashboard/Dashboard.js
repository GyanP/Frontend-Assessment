import React from 'react';
import './styles.css';
import { Card, Button, Block, Container } from './../../styled-components';
import bylaws from './../../assets/images/bylaws.png';
import Group from './../../assets/images/Group.png';
import Delete from './../../assets/images/Delete.png';
import download from './../../assets/images/download.png';
import print from './../../assets/images/print.png';

const Dashboard = () => {
  const [showResults, setShowResults] = React.useState(false)

  const showMenu = () => {
    setShowResults(!showResults);
  }

  return (
    <Container>
      <Card className="">
        <Block className="menu" onClick={showMenu}>
          <img src={Group} alt="Menu"/>
        </Block>
        {showResults && <div className="dropdown-content">
          <div className="drop-dwn download">
            <img className="img-dd" src={download} alt="download"/>
            <div>Download</div>
          </div>
          <div className="drop-dwn print">
            <img className="img-dd" src={print} alt="print"/>
            <div>Print</div>
          </div>
          <div className="drop-dwn delete">
            <img className="img-dd" src={Delete} alt="Delete"/>
            <div>Delete</div>
          </div>
        </div>}
        <div className="logo">
          <img src={bylaws} alt="Logo"/>
        </div>
        <div className="heading"><span>Corporate Bylaws</span></div>
        <div className='description'>
          An internal document that details the 
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
