import React from "react";
import styles from "./contact.module.scss";

const Contactus = () => {
  return (
    <section className={styles.contact_page}>
      <div className={"container"}>
        <div className={styles.contact_wrapper}>
          <div className={styles.contact_links}>
            <div className={styles.contact_links_wrapper}>
              <h3> Help Center</h3>
              <h5> We are here to help you.</h5>
              {linkItems.map((item: LinkItem) => {
                return <button key={item.id}>{item.name}</button>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;

type LinkItem = {
  id: number;
  name: string;
};

const linkItems: LinkItem[] = [
  { id: 1, name: "Our Stores" },
  { id: 2, name: "Chat With Us" },
  { id: 3, name: "Call Us" },
  { id: 4, name: "Email Us" },
];
