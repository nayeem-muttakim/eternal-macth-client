import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent");
  };
  return (
    <div style={{ textAlign: "center", minHeight: "80vh", paddingInline: 5 }}>
         <Helmet>
        <title>Eternal Match | Contact Us</title>
      </Helmet>
      <Heading backgroundColor={"#cdb4db"} color={"#fff"} py={10}>
        Contact Us
      </Heading>
      <Card
        py={15}
        px={10}
        style={{ maxWidth: 600, marginInline: "auto", marginTop: 70 }}
      >
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 20 }}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
              variant="filled"
              placeholder="Name"
              name="name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              variant={"filled"}
              name="email"
              placeholder="Email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              variant={"filled"}
              placeholder="Subject"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Your Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              variant={"filled"}
              placeholder="Message"
            />
          </FormControl>

          <Button type="submit" colorScheme="pink">
            Send
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactUs;
