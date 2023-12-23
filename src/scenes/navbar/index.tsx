import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import { Pix } from "@mui/icons-material";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <>
      <FlexBetween mb=".25rem" p=".5rem 0rem" color={palette.grey[300]}>
        <FlexBetween gap=".75rem">
          <Pix sx={{ fontSize: "28px" }} />
          <Typography variant="h4" fontSize="16px">
            Finannseer
          </Typography>
        </FlexBetween>

        <FlexBetween gap="2rem">
          <Box sx={{ "&:hover": { color: palette.primary } }}>
            <Link
              to="/"
              onClick={() => setSelected("dashborad")}
              style={{
                color: selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              dashboard
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary } }}>
            <Link
              to="/predictions"
              onClick={() => setSelected("predictions")}
              style={{
                color:
                  selected === "predictions" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              Predictions
            </Link>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </>
  );
};

export default Navbar;
