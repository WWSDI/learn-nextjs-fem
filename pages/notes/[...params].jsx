import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { params } = router.query;
  
  console.log("params:", params)

  return <h1>Catch-all routes path: /{params.join('/')}</h1>;
};

export default Page;