
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Grid from '@mui/material/Grid';

export default function AccordionExpandIcon() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Accordion style={{ backgroundColor: '#f0f0f0', boxShadow: 'none', borderRadius: '8px' }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{color:"white"}}/>}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ backgroundColor: '#0a2540', borderRadius: '8px',color:"white" }}
          >
            <Typography variant="h6">End to End Ownership</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography>
              We offer a complete construction package that caters to every need of the client. Our team comprises highly skilled engineers, professional architects, designers and site supervisors who make sure that your dream project is accomplished to perfection.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Accordion style={{ backgroundColor: '#f0f0f0', boxShadow: 'none', borderRadius: '8px' }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{color:"white"}}/>}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{ backgroundColor: '#0a2540', borderRadius: '8px',color:"white" }}
          >
            <Typography variant="h6">Quality Assurance with Reasonable Pricing</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography>
              Great finishing and premium quality does not necessarily call for a huge investment. At MM Construction, we stick to transparent pricing at every stage of the construction, ranging from procuring of raw materials to the process of construction. Our motto is to maximize the customer satisfaction by providing great deals in terms of prices as well as quality. We offer attractive discounts to our clients as well.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Accordion style={{ backgroundColor: '#f0f0f0', boxShadow: 'none', borderRadius: '8px' }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{color:"white"}}/>}
            aria-controls="panel3-content"
            id="panel3-header"
            style={{ backgroundColor: '#0a2540', borderRadius: '8px',color:"white" }}
          >
            <Typography variant="h6">Flexible Payment Options</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography>
              We follow strict business ethics where transparency and value for money are the key principles. Customer satisfaction is of foremost importance to us. In that regard, we arrive at a mutually convenient payment schedule upfront. The payment amount and duration of the payments are fixed beforehand so as to avoid any unrealistic promises or unpleasant surprises later. Further, there are no hidden costs that our clients incur. We offer pocket friendly budgets and flexible payment options to all our clients.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Accordion style={{ backgroundColor: '#f0f0f0', boxShadow: 'none', borderRadius: '8px' }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{color:"white"}}/>}
            aria-controls="panel4-content"
            id="panel4-header"
            style={{ backgroundColor: '#0a2540', borderRadius: '8px',color:"white" }}
          >
            <Typography variant="h6">Timely Updates and On Time Delivery</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography>
              A prompt and next to no delay delivery is what we strive for every project. We commence work as soon as a project is initiated and we closely follow the construction process through our efficient cohort of supervisors to ensure effective and fast paced delivery.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
