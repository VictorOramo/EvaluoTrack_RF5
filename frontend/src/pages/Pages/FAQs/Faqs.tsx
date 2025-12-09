import BreadCrumb from 'Common/BreadCrumb';
import React from 'react'
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';

const Faqs = () => {

    document.title = "FAQs | Steex - Admin & Dashboard Template"

    // const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="FAQs" pageTitle="Pages" />
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={4}>
                                    <h5 className="card-title mb-3">General Questions</h5>
                                    <p className="text-muted">General knowledge is information that has been accumulated over time through various mediums and sources. It excludes specialized learning that can only be obtained with extensive training and information confined to a single medium.</p>
                                </Col>
                                <Col xl={8}>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header id="genques-headingOne">
                                                What are FAQ questions?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                An FAQ page <b>(short for Frequently Asked Question page)</b> is a part of your website that provides answers to common questions, assuages concerns, and overcomes objections. It's a space where customers away from your sales-focused landing pages and homepage.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header id="genques-headingTwo">
                                                What is FAQ process?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                FAQ stands for Frequently Asked Questions. It's <b>your opportunity to communicate with the most important visitors to your website</b> – those who have begun the decision-making process about whether to do business with you can't fit elsewhere on their website.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header id="genques-headingThree">
                                                What is the purpose of FAQ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called a FAQ regardless.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header id="genques-headingFour">
                                                What is an online FAQ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                FAQs stand for frequently asked questions. It is one of the many crucial pages of your website. It gives your customers answers to recurring and common questions and addresses their concerns public product documentation that is released at the same time.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header id="genques-collapseFive">
                                                What are some design questions?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                These questions will help clients feel involved with the design process, and they'll also help you brainstorm ideas and fine-tune your creative output.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header id="genques-headingSix">
                                                What are the 4 questions of design?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                The methodology I've found most successful, has been introduced by prof Jeanne Liedtka from Darden Business School and identifies four stages: What is?, What if?, What wows?, and What works?
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={4}>
                                    <h5 className="card-title mb-3">Manage Account</h5>
                                    <p className="text-muted">Cybersecurity experts recommend changing your password every three months. There may even be situations where you should change your password immediately, especially if a cybercriminal has access to your account.</p>
                                </Col>
                                <Col xl={8}>
                                    <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header id="manageaccount-headingOne">
                                                What is account management process?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header id="manageaccount-headingTwo">
                                                Why is account management important?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header id="manageaccount-headingThree">
                                                What is account manager role?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header id="manageaccount-headingFour">
                                                What is a key account strategy?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={4}>
                                    <h5 className="card-title mb-3">Privacy & Security</h5>
                                    <p className="text-muted">Privacy is the right to control how your information is viewed and used, while security is protection against threats or danger. In the digital world, security generally refers to the unauthorized access of data, often involving protection against hackers or cyber criminals.</p>
                                </Col>
                                <Col xl={8}>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header id="privacy-headingOne">
                                                Which is important privacy or security?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header id="privacy-headingTwo">
                                                What is security and privacy?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header id="privacy-headingThree">
                                                How can I protect my privacy?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                He wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header id="privacy-headingFour">
                                                Why is privacy so important?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Faqs;