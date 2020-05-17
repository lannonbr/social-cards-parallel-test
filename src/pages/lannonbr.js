import React from "react";
import { Helmet } from "react-helmet";

const LannonbrPage = (props) => {
  return (
    <React.Fragment>
      <Helmet
        title={props.title}
        meta={[
          {
            name: `og:title`,
            content: "Lannonbr",
          },
          {
            name: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:title`,
            content: "Lannonbr",
          },
          {
            name: `twitter:card`,
            content: props.ogImage ? `summary_large_image` : `summary`,
          },
          {
            name: `twitter:image`,
            content: `https://fervent-goldstine-c4fc60.netlify.app/og/members/lannonbr.jpg`,
          },
        ]}
      />
      <div>
        <h1>Lannonbr</h1>
      </div>
    </React.Fragment>
  );
};

export default LannonbrPage;
