import { useState, useContext } from "react";
import styles from "./contact-form.module.css";
import NotificationContext from "@/store/notification-context";

const ContactForm = () => {
  const url = "/api/contact";
  const [eneteredEmail, setEnteredEmail] = useState("");
  const [eneteredName, setEnteredName] = useState("");
  const [eneteredMessage, setEnteredMessage] = useState("");
  const notificationCtx = useContext(NotificationContext);
  const { showNotification } = notificationCtx;

  const sendMessageHandler = (event) => {
    event.preventDefault();

    showNotification({
      title: "Sending...",
      message: "Sending a message...",
      status: "pending",
    });

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: eneteredEmail,
        name: eneteredName,
        message: eneteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        showNotification({
          title: "Message sent!",
          message: "Successfully submitted your message...",
          status: "success",
        });
        setEnteredEmail("");
        setEnteredName("");
        setEnteredMessage("");
      })
      .catch((error) => {
        showNotification({
          title: "Something went wrong",
          message:
            "Unfortunately, something went wrong when sending a message...",
          status: "error",
        });
      });
  };
  return (
    <section className={styles.contact}>
      <h1> Feel free to leave your feedback! </h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email"> Your e-mail </label>
            <input
              type="email"
              id="email"
              required
              value={eneteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            ></input>
          </div>
          <div className={styles.control}>
            <label htmlFor="name"> Your name </label>
            <input
              type="test"
              id="name"
              required
              value={eneteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            ></input>
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message"> Your message </label>
          <textarea
            id="message"
            rows="6"
            required
            value={eneteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button> Send message </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
