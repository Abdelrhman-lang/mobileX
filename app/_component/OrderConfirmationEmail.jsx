import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Section,
} from "@react-email/components";

export default function OrderConfirmationEmail({ firstName }) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for your order! 🎉</Preview>
      <Body
        style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Heading as="h2">Order Confirmation</Heading>
          <Text>Order ID: </Text>
          <Text>Status: </Text>

          <Section>
            <Heading as="h3">Items:</Heading>
          </Section>

          <Text>Thanks, {firstName} for shopping with MobileX Store ❤️</Text>
        </Container>
      </Body>
    </Html>
  );
}
