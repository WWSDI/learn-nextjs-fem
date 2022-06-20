/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import Link from "next/link";

const handler = ({ note }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>
        Note: {note.id} - {note.data.title}{" "}
      </h1>
      <h2>{note.data.content}</h2>
      <h2>This is a page created by [id].jsx dynamic route page</h2>
    </div>
  );
};
export default handler

export async function getServerSideProps({ params, req, res }) {
  
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`);
  console.log("🌸", params.id);
  console.log("🌸", response.ok, response.status);
  console.log("🌸", response);
  if (response.status !== 200) {
    res.writeHead(302, {
      Location: "/notes",
    });
    res.end();
    return {
      props: {},
    };
  }

  const { note } = await response.json();
  return {
    props: { note },
  };
}
