import ContactForm from "@/components/contact/contact-form";
import { Fragment } from "react";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Leave a message</title>
        <meta name="description" content="Send me your feedback" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
