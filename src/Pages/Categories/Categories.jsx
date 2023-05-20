import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PoliceCars from "../SubCategories/PoliceCars";
import Trucks from "../SubCategories/Trucks";
import SportsCars from "../SubCategories/SportsCars";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Categories() {
  const [value, setValue] = React.useState(0);
  const [sports, setSports] = React.useState([]);
  const [trucks, setTrucks] = React.useState([]);
  const [police, setPolice] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/sports")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:5000/trucks")
      .then((res) => res.json())
      .then((data) => setTrucks(data));
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:5000/police")
      .then((res) => res.json())
      .then((data) => setPolice(data));
  }, []);
  console.log(sports);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-blue-50">
          <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className="text-center">
        <div className="pt-16">
          <h1 className="font-bold text-4xl px-4">OUR PRODUCTS</h1>
        </div>
        <h4 className="px-4">Let’s See What’s New</h4>
        </div>
        <div className="">
        <Tabs
        className="w-full border-none"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Sports Cars" {...a11yProps(0)} />
          <Tab label=" Trucks" {...a11yProps(1)} />
          <Tab label="Police car" {...a11yProps(2)} />
        </Tabs>
        </div>
      </Box>
      <div className="border-2 bg-white">
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sports?.map((category) => (
              <SportsCars key={category._id} category={category}></SportsCars>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {trucks?.map((category) => (
              <Trucks key={category.id} category={category}></Trucks>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {police?.map((category) => (
              <PoliceCars key={category.id} category={category}></PoliceCars>
            ))}
          </div>
        </TabPanel>
      </div>
    </Box>
    </div>
  );
}
