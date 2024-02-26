import {
  Button,
  Html,
  Body,
  Img,
  Heading,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Body style={main}>
        <Img
          src="https://www.osa-law.com/assets/Full_Logo-0c350564.png"
          width={300}
        />
        <Heading>
          <Text style={header}>We have received a new potential customer:</Text>
        </Heading>
        <Text style={customerInfo}>
          <strong>Customer Name:</strong> Ana Itzel Martinez Hernandez
        </Text>
        <Text style={customerInfo}>
          <strong>Phone Number:</strong> +1 (858) 752-7345
        </Text>
        <Text style={customerInfo}>
          <strong>Preferred Language:</strong> Spanish
        </Text>
        <Text style={customerInfo}>
          <strong>Date of Incident:</strong> 01/01/2021
        </Text>
        <Text style={customerInfo}>
          <strong>TreatmentStatus:</strong> In Progress
        </Text>
        <Text style={customerInfo}>
          <strong>Incident Description:</strong> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Text>
      </Body>
    </Html>
  );
}

const main = {
  fontFamily: '"Times New Roman",Times,serif',
  backgroundColor: "#e6e6e6",
  margin: "0 auto",
  padding: "40px",
  color: "#264166",
};

const header = {
  fontSize: "56.8px",
  backgroundColor: "#264166",
  color: "#e6e6e6",
  paddingTop: "40px",
  paddingBottom: "40px",
  paddingLeft: "40px",
  paddingRight: "40px",
  lineHeight: "60px",
};

const customerInfo = {
  fontSize: "32px",
  lineHeight: "30px",
  color: "#264166",
};
