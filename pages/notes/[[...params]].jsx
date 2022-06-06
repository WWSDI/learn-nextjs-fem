import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { params } = router.query;

  console.log("params:", params);

  return (
    <div>
      <h1>Catch-all routes path: /{params ? params.join("/") : "null"}</h1>
      <h2>{router.asPath}</h2>
    </div>
  );
};

export default Page;
