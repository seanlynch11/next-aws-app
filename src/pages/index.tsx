import Canvas from "@/components/canvas";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Draw Together</title>
        <meta
          name="description"
          content="Created with NextJS 13, AWS Amplify/DynamoDB/GraphQL"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon-512x512.png" />
      </Head>
      <Canvas></Canvas>
    </>
  );
}
