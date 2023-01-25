import styled from "@emotion/styled";

export const BadgeWrapper = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 36,
  ":hover": {
    cursor: "pointer",
  },
});

export const BadgeContent = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: theme.colors.orange,
  color: theme.colors.white,
  padding: "1px 6px",
  fontWeight: 700,
  fontSize: "1.1rem",
  borderRadius: 5,
}));
