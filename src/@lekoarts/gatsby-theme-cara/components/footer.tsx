/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";

const Footer = () => (
  <Flex
    as="footer"
    sx={{
      justifyContent: "center",
      alignItems: "center",
      mt: [5],
      color: `secondary`,
      a: {
        variant: `links.secondary`,
      },
    }}
  >
    <div></div>
  </Flex>
);

export default Footer;
