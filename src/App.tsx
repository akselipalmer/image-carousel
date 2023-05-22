import { Typography, Card, Grid } from "@mui/joy";

function App() {
  return (
    <Grid
      container
      sx={{
        // height: "100vh",
        // width: "100vw",
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundColor: "#464646",
        justifyContent: "center",
        // px: 10,
        py: 3,
      }}
    >
      <Grid
        xs={10}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="start"
      >
        <Card sx={{ maxWidth: 400 }}>
          <Typography level="h4" mb={0.5} mt={0}>
            Build Your Dream
          </Typography>
          <Typography>
            Build Your Dream fast with the best tools on the market.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
