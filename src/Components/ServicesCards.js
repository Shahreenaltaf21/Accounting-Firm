import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import img3 from '../Asstes/img3.png';
import ListGroup from 'react-bootstrap/ListGroup'; 
import { Link } from 'react-router-dom';
import ResolutionHead from './ResolutionHead';

const CardStyle = styled.div`
 
`;

function ServicesCards() {
    return (
        <CardStyle>
            <div className='d-flex justify-content-around' style={{ backgroundColor: "#b5cdab" }}>
                <Container className='d-flex justify-content-around'>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="middle" src={img3} style={{ width: "150px", height: "150px" }} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "2rem" }}>Text Resolution Services</Card.Title>
                            <Card.Text>
                                At TOT we are determined to provide the help you need to be tax compliant.
                                Our tax resolution specialists assess your situation carefully and take over the burden.
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Tax levies and liens</ListGroup.Item>
                                <ListGroup.Item>Wage Garnishment </ListGroup.Item>
                                <ListGroup.Item>IRS and State notice review and response </ListGroup.Item>
                            </ListGroup>
                            <Button variant="success" >
                            <Link className="nav-link active text-white" aria-current="page" to={{ResolutionHead}}>More</Link></Button> 
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="middle" src={img3} style={{ width: "150px", height: "150px" }} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "2rem" }}>Tax Preparation Services</Card.Title>
                            <Card.Text>
                                One of the primary purposes of tax planning is to mitigate one’s tax liability.
                                Reducing taxable income, whether it is the result of compensation or inheritance.
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Individual Tax Preparation </ListGroup.Item>
                                <ListGroup.Item>Amending Tax returns </ListGroup.Item>
                                <ListGroup.Item>NYS Filing Fee  for Partnership, Limited Liability Company</ListGroup.Item>
                            </ListGroup>
                            <Button variant="success">More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="middle" src={img3} style={{ width: "150px", height: "150px" }} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "2rem" }}>Business Operation Services</Card.Title>
                            <Card.Text>
                                These services are becoming extremely important. Large or small, established or startup, the same goal
                                for all - save you tax money. Our aim is to maximize tax deductions.
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Bookkeeping Services </ListGroup.Item>
                                <ListGroup.Item>Payroll Services</ListGroup.Item>
                                <ListGroup.Item>LLC/Corporation Formation
                                    Amending LLCs, Get a DBA
                                </ListGroup.Item>
                            </ListGroup>
                            <Button variant="success">More</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </CardStyle>
    );
}
export default ServicesCards;