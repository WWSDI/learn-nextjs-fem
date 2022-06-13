/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const handler = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>
        This is a really dope note taking app.
      </h1>
      <h2>
        <a href={process.env.URL}>
          This is an external Link added using env var
        </a>
      </h2>
    </div>
  </div>
);
export default handler;

export function getStaticProps(context){
  console.log(context)
  return {
    props:{}
  }
}