import { Container } from "@mui/material";
import AppBreadcrumbs, { CrumbList } from "./AppBreadCrumb";
import ModeSwitch from "../ModeSwitch";

const Header = ({ crumbs }: CrumbList) => {
  return (
    <Container
      sx={{
        padding: " 0 !important",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      maxWidth={false}
    >
      <AppBreadcrumbs crumbs={crumbs} />
      <ModeSwitch />
    </Container>
  );
};

export default Header;
