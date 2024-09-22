import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Carousel from "./Carousel";
import Card from "./Card";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

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

function BasicTabs({ title, data, filterCallback , tabs}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Divider sx={{ borderColor: "#34C94B" }} />
      <Box sx={{ width: "100%" }}>
        <Box className="section">
          <div className="header">
            <h3>{title}</h3>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabs.map((tab, index) => <Tab label={tab} {...a11yProps(index)} key={`tab-${index}`}/>)}
          </Tabs>
        </Box>
        {tabs.map((tab, index) => (
          <TabPanel key={`song-tab-${index}`} value={value} index={index}>
            <Carousel data={filterCallback(tab, data)} componentRender={(ele) => <Card data={ele} type="songs"/>} />
          </TabPanel>
        ))}
      </Box>
      <Divider sx={{ borderColor: "#34C94B", marginTop: '50px' }} />
    </>
  );
}

export default BasicTabs;
