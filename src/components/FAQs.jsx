import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ReactComponent as ExpandMoreIcon } from "../assets/svg/explore.svg";

function FAQs() {
  return (
    <div className="faqs-container">
      <h2 className="text-center">FAQs</h2>
      <Accordion className="mb-10">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordian--summary"
        >
          <Typography className="text-white mb-10">Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-10">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-white">Can I download to songs and listen offline ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunatly we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQs;
