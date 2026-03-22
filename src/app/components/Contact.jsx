"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  emailjs
    .sendForm(
      "service_v3mtrg4",
      "template_i0rh09w",
      form,
      "Qs95X0l98P-KJxk4t"
    )
    .then((result) => {
      console.log("SUCCESS", result.text);
      form.reset();
    })
    .catch((error) => {
      console.log("FAILED", error);
    });
};

export const Contact = () => {
  return (
    <div id="contact" className="h-screen py-0 sm:py-20">
      <Heading text={"Getin touch"}></Heading>
      <div className="w-full h-full my-auto flex max-lg:flex-col items-center justify-between max-lg::justify-center gap-x-20 max-lg::gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            className="w-100 rounded-md opacity-80"
            src={"/contact.gif"}
            alt="Contact Image"
            width={400}
            height={400}
          ></Image>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          action=""
          onSubmit={handleSubmit}
          className="w-150 max-lg:w-100 pb-50 sm:pb-0 max-sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex max-lg:flex-col gap-x-3 max-lg:gap-y-3">
            <input
              type="text"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              name="user_name"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              name="user_email"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            id=""
            className="max-h-62.5 min-h-37.5 border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write Me..."
          ></textarea>
          <input
            type="submit"
            className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm tracking-wider text-white outline-none hover:bg-yellow-400 transition-colors cursor-pointer"
            value="Send Message"
          />
        </motion.form>
      </div>
    </div>
  );
};
export default Contact;
