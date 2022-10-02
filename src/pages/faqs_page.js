import React from "react";
import Layout from "./layout_page";
import Accordion from "react-bootstrap/Accordion";

const FaqsPage = () => {
  return (
    <Layout header="FAQs">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Can I apply for several different jobs simultaneously?
          </Accordion.Header>
          <Accordion.Body>
            You are free to apply for more than one job. Once you have created a
            job application account in the course of your application, you can
            apply for further jobs at any time. Please make sure that if you
            apply for more than one job your applications do not seem random or
            non-binding.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What’s the maximum size of a single job application file?
          </Accordion.Header>
          <Accordion.Body>
            You can upload a single file with a maximum size of 5 MB.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Whom can I call if I have questions about a certain job?
          </Accordion.Header>
          <Accordion.Body>
            You can find the name of the contact person for each position in the
            job advertisement. The contact persons will be glad to answer your
            specific questions about the job itself, the company, or the status
            of your application.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How long does the application process take?
          </Accordion.Header>
          <Accordion.Body>
            It will take you only a few minutes to post your application on our
            career portal. For that we need to have you fill out our form with
            your contact information. In the second step, you upload your letter
            of application / motivation, curriculum vitae, and references. Right
            after you’ve done that, you will receive a confirmation of receipt.
            In the following days, we will review your application and get in
            touch with you.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Will my personal data be handled confidentially?
          </Accordion.Header>
          <Accordion.Body>
            We handle your personal data confidentially, in compliance with the
            General Data Protection Regulation (GDPR). You can find additional
            information at: Privacy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            How can I make the experience as comfortable as possible?
          </Accordion.Header>
          <Accordion.Body>
            Check your technical equipment ie secure an appropriate internet
            connection for a video call, test that your camera and microphone
            work well. Sit in a private and quiet environment. Come prepared by
            reading about company and the position.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            How can I show my passion for the position?
          </Accordion.Header>
          <Accordion.Body>
            As a company we draw our strength from different personalities,
            backgrounds, skills. Tremendous energy and passion come with our
            diverse perspectives. They are essential to making smart decisions,
            building innovative teams and ultimately making our company purpose
            come true.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Layout>
  );
};

export default FaqsPage;
