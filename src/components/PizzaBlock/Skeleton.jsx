import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" />
    <rect x="-10" y="250" rx="10" ry="10" width="280" height="23" />
    <rect x="7" y="279" rx="10" ry="10" width="260" height="88" />
    <rect x="0" y="378" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="378" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
