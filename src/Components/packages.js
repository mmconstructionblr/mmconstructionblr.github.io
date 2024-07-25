import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Grid from "@mui/material/Grid";
import { MDBTypography } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function Packages() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Design & Drawing</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        {/* <Typography variant="h4" >List-Square</Typography> */}

                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Detailed 2D floor plans will be provided.
                                </Typography>
                            </li>
                            <MDBTypography note noteColor="warning">
                                <strong>Note:</strong> This Floor plans and elevation image is
                                just for reference only, Elevation for each project will be
                                designed as per client’s taste and requirement.
                            </MDBTypography>
                            <li>
                                <Typography variant="h6">
                                    Interior Design : 2D Furniture Layout provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    3D Elevation view will be provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Architectural Design : All Necessary Working Drawings
                                    Provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Structural Drawings: Detailed Plinth Beam layouts, Slab
                                    shuttering and reinforcements, Columns, Footings and Centre
                                    line Drawings, and working drawings will be provided.
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Structure & Civil</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <Typography>:: Steel ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    ISI standard FE-550D TMT Steel will be used.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Blocks/Bricks ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Solid 6-inch and 4-inch concrete blocks will be used.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    S6-inch blocks for External walls and 4-inch blocks for
                                    internal walls.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Cement ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    ISI Standard 53 Grade used for Masonry and 43 Grade will be
                                    used for Plastering.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Birla / Ramco / Dalmia or equivalent Brands will be used.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Sand ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    M-Sand will used for Masonry and Plastering M-Sand will be
                                    used for Plastering.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Basic Rate of M sand (Doubled Washed)
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Basic Rate of P sand (Triple Washed)
                                </Typography>
                            </li>
                        </ul>

                        <Typography>:: Others ::</Typography>
                        <Typography variant="h6">
                            {" "}
                            <strong>Concrete:</strong> ISI Standard M20 Grade Ready Mix
                            Concrete will used.
                            <br />
                        </Typography>
                        <Typography variant="h6">
                            <strong>Aggregates:</strong> 20mm and 40mm will be used.
                            <br />
                        </Typography>
                        <Typography variant="h6">
                            <strong>Roof:</strong> Floor to Floor height - 10 Feet will be
                            constructed.
                            <br />
                        </Typography>
                        <Typography variant="h6">
                            <strong>Water Proofing:</strong> Dr.Fixit Water proofing solution
                            will be used.
                            <br />
                        </Typography>
                        <Typography variant="h6">
                            <strong>Plinth:</strong> Height From Road Level Upto 1.50 Feet
                            will be constructed.
                            <br />
                        </Typography>
                        <Typography variant="h6">
                            <strong>Walls:</strong> Internal, External & Toilets Walls -
                            Column Joints Plastering with Chicken Mesh.
                            <br />
                        </Typography>
                        <Typography variant="h6">
                            <strong>Chamber Cover:</strong> Cement Cover will be Given.
                            <br />
                        </Typography>
                        <Typography variant="h6">
                            <strong>UG Sump:</strong> 6 inch Blockwork Of 6000 Liters Capacity
                            - Rs 10/Litre
                            <br />
                        </Typography>
                        <Typography variant="h6">
                            <strong>Steel / Concrete Lofts:</strong> Not Included
                            <br />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Kitchen & Fixtures</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <Typography>:: Kitchen Granite Platform ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Cost of the Granite platform will be upto Rs.160/sqft.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Thickness of the Granite will be 40mm.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Ceramic Wall Tiles ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Ceramic Wall tiles worth upto Rs.50/sqft will be provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Height of the Wall tiles will be up to 4 feet above the
                                    Granite platform.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Kitchen Sink, Faucets and Accessories ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Sink of worth upto Rs.6,000/per sink{" "}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Sink Faucet and Accessories worth upto Rs.1,500/- will be
                                    provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    CP & Sanitary Fixture such as Washbin, WC, Taps & Other
                                    accessories like Bottle Trap, Gratings etc.. will be provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Electrical Fixtures Not Included.
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Doors & Windows</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <Typography>:: Main Door and Frame ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    The main door and Frame will be made of Teak Wood Frame
                                    (6"X3") and Shutter Including Hardware
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Door designs will be as per company standards.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Pooja Door and Frame ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    The pooja door and Frame will be made of Teak Wood Frame
                                    (5"X3") & Shutter Including Hardware
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Door designs will be as per company standards.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Windows ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Simta/Eureka UPVC windows will be provided (Rs 700/sft
                                    including grills). (in Standard – 400/sft including grills)
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Percentage of openings for windows- 30% Maximum.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Maximum Opening Percentage For Windows Will Be 22 %, Height
                                    and Width of the Windows and Grill design will be as per
                                    company standards.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Internal Doors and Frames ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    SAL wood frame will be provided for Internal Door Frames
                                    (5"X3") and Shutter Including Hardware and Painted (Only).
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Bathroom Doors will WPC Water Proof Solid Doors with Frames
                                    (4”X2”)
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Door designs will be as per company standards.
                                </Typography>
                            </li>
                        </ul>
                        <MDBTypography note noteColor="warning">
                            <Typography>:: Note ::</Typography>
                            <ul style={{ listStyleType: "square" }}>
                                <li>
                                    All Internal Doors Shutter:{" "}
                                    <strong>Laminated Flush Door (Rs 225 sft).</strong>
                                </li>
                                <li>
                                    Main Doors: <strong>Melamine Polish will be made</strong>
                                </li>
                                <li>
                                    Door Hardware :{" "}
                                    <strong> Europa locks with handle (Rs 2500).</strong>
                                </li>
                                <li>
                                    Main Doors & Puja Doors Hinges:{" "}
                                    <strong>Brass Hinges Will Be Provided</strong>
                                </li>

                                <li>
                                    All other doors:<strong>SS Hinges</strong>
                                </li>
                                <li>
                                    Room doors:<strong>Mortise lock (Rs 1200)</strong>
                                </li>
                            </ul>
                        </MDBTypography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Painting</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <Typography>:: Interior Painting ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Asian Band Provided in this package.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    2-Coat Wall Putty will be done.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Plus 1-Coat Primer will be done.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    plus 2-Coat Premium Emulsion Paint will be done.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: External Painting ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    1-coat Primer +Apex Exterior Emulsion Paint Or Equivalent will
                                    be done.
                                </Typography>
                            </li>
                        </ul>
                        <Typography variant="h6">
                            {" "}
                            <strong>Metal and Wood Painting:</strong> 2-coats of Asianpaints
                            Enamel painting will be done for Window grills, MS Railings & MS
                            Main Gate.
                        </Typography>
                        <br />
                        <Typography variant="h6">
                            {" "}
                            <strong>Brands :</strong> Asian Brands will be provided.
                            <br />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Flooring & Wall Tiling</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>Living, Kitchen, Dining & Bedrooms :</strong>Granite /
                                    Vitrified tiles worth up to Rs.100/sqft.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>Balcony, Parking & Sitout:</strong>Branded tiles worth
                                    up to Rs.50/sqft.
                                    <br />
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>Bathroom Dadoing (Upto 7 Feet Height) :</strong>
                                    Branded tiles worth up to Rs.60/sqft will be provided.
                                    <br />
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>Bathroom Flooring :</strong>Anti-skid tiles worth upto 50/sqft will be provided.
                                    <br />
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>
                                        Kitchen Wall Dadoing (Upto 4 Feet Above Counter):
                                    </strong>{" "}
                                    Backsplash tiles worth up to Rs.50/sqft will be provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>Staircase Tiles:</strong> Granite will be provided up
                                    to Rs. 100/sqft.
                                    <br />
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>Kitchen Counter Top:</strong>Rs.160/sqft will be
                                    provided.
                                    <br />
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>Pooja Wall Tiles :</strong>Ceramic upto 7Feet Height
                                    tiles worth upto Rs.50/sqft will be provided.
                                    <br />
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Electrical</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>Wires :</strong>Finolex / V-guard Will Be Provided.
                                    <br />
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    <strong>Switches and Boards:</strong>Lisha/GM/Anchor/Roma Brand Switches and Panels will be provided with Steel Box.
                                    

                                    <br />
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    DB's & MCB's Legrand Make are included.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    1 UPS Point Of Each Unit at Nearest Point & Electrical Car &
                                    Bike Charging Point Will Be Given in Parking.
                                </Typography>
                            </li>
                        </ul>
                        <MDBTypography note noteColor="warning">
                            <Typography>:: Note ::</Typography>
                            <ul style={{ listStyleType: "square" }}>
                                <li>
                                    Basic Rates Of Switches:
                                    <strong>Rs. 25/- Per Piece will be cost.</strong>
                                </li>
                                <li>
                                    Light & Power Points:{" "}
                                    <strong> As Per Electrical Design.</strong>
                                </li>
                                <li>
                                    AC Provision: <strong> Any 2 Room Per Floor Provided.</strong>
                                </li>
                                <li>
                                    Conduits :{" "}
                                    <strong>Good Quality & Hidden in Slabs & Walls.</strong>
                                </li>

                                <li>
                                    Switches & Plates:<strong>Anchor Will be Provided.</strong>
                                </li>
                            </ul>
                        </MDBTypography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Plumbing & Water Tanks</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    Water Supply System : Both Internal & External Provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    CPVC Pipes - Ashirwad / Supreme / Astral Pipes Provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    {" "}
                                    External Sewage System – Inspection Chambers & Sewage Outlet
                                    to Manhole
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Overhead Tank ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Triple Layer ISI standard layered Water Tank will be provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Water tank capacity starts from 1000 - 3000 liters - Rs.7/litre
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    The capacity depends on the total built-up area.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    <strong>Brands :</strong> Ganga & Kaveri
                                    <br />
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Underground Sump/Tank ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Underground Sump will be of 6” Solid concrete blocks with
                                    Retaining wall with reinforcement with waterproof plastering
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Sump tank capacity starts from 6000 liters - Rs.10/litre and
                                    the capacity depends on the total built-up area.
                                </Typography>
                            </li>
                        </ul>
                        <MDBTypography note noteColor="warning">
                            <Typography>:: Note ::</Typography>
                            <strong>Rs.25,000/- per bathroom includes the below
                                Commode | Wash basin| Wall mixer or Diverter| Shower| Health faucet and hardware. (2 Bathrooms for 1000 sft)
                            </strong>
                            {/* Cera/Hindware/Equivalent- Rs.20,000/- per 1000/sqft */}
                        </MDBTypography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Gates and Railings</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <Typography>:: Staircase and Balcony Railings ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                Simpe 304 Grade SS Railings with Standard designs (Rs 800 /rft)
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Designs will be as per company standards.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Parapet wall ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Standard Parapet wall of height 3 feet will be provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    4-inch Solid concrete blocks & both side plastering and
                                    painting will be done.
                                </Typography>
                            </li>
                        </ul>
                        <MDBTypography note noteColor="warning">
                            <Typography>:: Note ::</Typography>
                            <ul style={{ listStyleType: "square" }}>
                                <li>
                                    Main Gate:{" "}
                                    <strong>
                                        {" "}
                                        MS Gate Will Be Provided upto cost of Rs.350/-Per Sqft.
                                    </strong>
                                </li>
                              
                                <li>
                                    Utility Grill :{" "}
                                    <strong> Is Not Included in this package.</strong>
                                </li>
                                <li>
                                    Basic Rate of Fabrication Steel :{" "}
                                    <strong> Rs.90/-Per KG .</strong>
                                </li>
                            </ul>
                        </MDBTypography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Package Exclusions</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <Typography>:: Interiors ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Interiors are not included in the package.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Electrical/BESCOM ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Electrical Meters and Meter Box are not included in the
                                    package.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    BESCOM charges are NOT included in the package.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Electrical Fixing : Fan, Tubelights, Common area Lights,
                                    Parking Area Lights & Exterior LED Lights-will be an extra.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Foundation ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Charged additionally for depth of the foundation is more than
                                    5 feet.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Extra Reinforcement-if required.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    SSM Below Plinth Beam-other than given standard design.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">Lift concrete wall.</Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Double mat and strap beam if required.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Footings and column provision for additional floor.{" "}
                                </Typography>
                            </li>

                            <li>
                                <Typography variant="h6">
                                    Additional charges will Apply if soil bearing capacity (SBC)
                                    is lesser than 180 Kn/m2.
                                </Typography>
                            </li>

                            <li>
                                <Typography variant="h6">
                                    Extra sump Depth -10Rs/Litre.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Road cutting ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Road cutting chares for BESCOM and BWSSB are NOT included in
                                    the package.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">Outside Ramping.</Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Any Civil Work Outside House Area.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Breaking/drilling Rock ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Rock breaking or drilling expenses will be borne by Client.
                                </Typography>
                            </li>
                        </ul>
                        
                        <Typography>:: COMPOUND WALL ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                If compound wall needed, 1 course SSM and 6 course block work (Rs 1300 /rft)
                                </Typography>
                            </li>
                            
                        </ul>
                        <Typography>:: Elevation ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                Elevation cost upto 10 Rs/sft of total built up area is included in Premium package.  Additional cost to be borne by client.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Temporary Power ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    The client must provide Temporary power for the construction.
                                </Typography>
                            </li>

                            <li>
                                <Typography variant="h6">
                                    Temporary power renewal should be done by Client every month
                                    until the Construction of project is completed.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Excavation ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Excavation will be charged extra when encountered with
                                    water/loose soil/stone.
                                </Typography>
                            </li>

                            <li>
                                <Typography variant="h6">
                                    Buying new earth/sending existing earth for
                                    excavation/backfilling purpose shall be charged on actual.
                                </Typography>
                            </li>

                            <li>
                                <Typography variant="h6">
                                    Assuming the site & road level to be equal, if the ground
                                    level needs to be raised above 18”, it shall be charged for
                                    accordingly
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Government approvals ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Getting Approvals from the Government is excluded from the
                                    package.
                                </Typography>
                            </li>

                            <li>
                                <Typography variant="h6">
                                    Client must get all the Government approvals for the project.
                                </Typography>
                            </li>

                            <li>
                                <Typography variant="h6">
                                    The complete fee payment for plan sanction in Panchayat limits
                                    need to be borne by client
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">Licensing and Liasoning</Typography>
                            </li>
                        </ul>
                        <Typography>:: Demolition (if any) ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    For existing building, we need to access and conclude
                                    excavation charges based on site challenges.{" "}
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Ramp ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Charged additionally as per requirement.
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: % Of Opening Doors and Windows ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">22 % Builtup area maximum.</Typography>
                            </li>
                        </ul>
                        <Typography>:: Front Drain Work ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    If any sanitary chamber need to provide, sanitary pit will be
                                    charged extra and sanitary connection outside the site
                                    boundary will be additional
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Elevation ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    This proposal includes basic elevation design for your home
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    A 3D elevation is presented for client to choose from & design{" "}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Elevation can be designed & more elements may be added at very
                                    nominal cost to the design
                                </Typography>
                            </li>
                        </ul>
                        <Typography>:: Others ::</Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    One point of Electricity & water needs to be provided by the
                                    client free of cost to facilitate construction.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Only 2 No's Of Bathroom Will Be Provided Each 1,000 Sqfeet Of
                                    Construction.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Additional Charges Will Be Applicable If SBC less than 180/- .
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Pricing</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <Typography variant="h6">
                            <strong>₹ 1,700 per/sq.ft</strong>
                        </Typography>
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    <strong>Measurement Made as Per Roof to Roof.</strong>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    <strong>
                                        The total duration of the record for completion of the
                                        project will be 8 months from the date of commencement.
                                    </strong>
                                </Typography>
                            </li>
                        </ul>
                        <MDBTypography note noteColor="warning">
                            <strong>Note:</strong> Standard height of the Headroom is 8-foot
                            and the Tank room is 6-foot.
                        </MDBTypography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Warranty</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Construction Maintenance warantee – 1 Year ; Waterproofing
                                    warranty – 5 Years, structural warranty – 50 Years
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Warranty starts from the date of Handing over the Project to
                                    the Client.{" "}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Warranty for all the Products can be availed directly from the
                                    manufacturer of the product.{" "}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    We will be providing all the required Bills of products to the
                                    client to claim warranty.
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Accordion
                    style={{
                        backgroundColor: "#f0f0f0",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: "white" }} />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        style={{
                            backgroundColor: "#0a2540",
                            borderRadius: "8px",
                            color: "white",
                        }}
                    >
                        <Typography variant="h6">Note</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
                    >
                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <Typography variant="h6">
                                    Civil Engineer will be assigned for the project for inspection
                                    and monitoring the quality of work and progress.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Sheds would be constructed at site premises for material
                                    storage and Watchman/Labor.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Soil Testing would be done by us before starting the
                                    construction.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    All the Brand’s logos and Some product’s images are mentioned
                                    just for understanding/reference purpose only. Actual product
                                    may look different from the images mentioned in this package.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    A 3D Elevation is Presented for clients to choose from designs
                                    & Only Basic Elevation Design is provided.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Floor plans and 3D elevations mentioned in this document is
                                    just for reference purpose only, the designs will change as
                                    per Site dimensions, Client’s requirements etc.{" "}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    SSM, Bore well, additional floor height will be charged extra,
                                    no deduction for opting blocks.{" "}
                                </Typography>
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
}
