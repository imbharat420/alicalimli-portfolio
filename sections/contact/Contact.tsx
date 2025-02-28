import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { SpringyText } from "../../components";
import TwLink from "../../components/tw-link/TwLink";
import Image from "next/image";

const socialsArr = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/alicalimli/" },
  { name: "Twitter", link: "https://twitter.com/alicalimli_dev" },
  { name: "Github", link: "https://github.com/alicalimli" },
];

const Contact = () => {
  const socials = socialsArr.map((social) => (
    <li key={social.name}>
      <TwLink className="text-lg text-white" href={social.link}>
        {social.name}
      </TwLink>
    </li>
  ));

  return (
    <section className="section ">
      <main className="flex gap-16">
        <div className="flex w-full flex-col gap-12">
          <header
            className="flex flex-col items-center           
            gap-2
            text-center
            md:items-start
            md:text-left"
          >
            <SpringyText className="justify-center" text="Get In Touch!" />
            <h1 className="text-muted-main fluid-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, consectetur!
            </h1>
          </header>
          <ContactForm />
        </div>
        <div className="hidden w-1/2 flex-col gap-4 lg:flex xl:w-1/4">
          <Image
            src="/images/profile.jpeg"
            width={112}
            height={112}
            className="rounded-full"
            alt={"Ali Calimli's Profile Picture"}
          />
          <div>
            <h3 className="fluid-md text-muted-secondary">Email</h3>
            <TwLink
              className="text-lg text-white"
              href="mailto:alicalimli76@gmail.com"
            >
              alicalimli76@gmail.com
            </TwLink>
          </div>
          <div>
            <h3 className="fluid-md text-muted-secondary">Socials</h3>
            <ul className="flex flex-col">{socials}</ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
