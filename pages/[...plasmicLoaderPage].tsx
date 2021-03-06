/** This file is auto-generated by Plasmic; please do not edit! */
import { useRouter } from "next/router";
import PlasmicLoader from "@plasmicapp/loader";

const componentsByPath = {
  
    "home": {name: "Home", projectId: "imt14t3PvaASwxmg4fwYY3" },
  
    "post": {name: "Post", projectId: "imt14t3PvaASwxmg4fwYY3" },
  
};

export default function PlasmicLoaderPage() {
  const router = useRouter();
  let { plasmicLoaderPage } = router.query;
  if (Array.isArray(plasmicLoaderPage)) {
    plasmicLoaderPage = plasmicLoaderPage.join('/');
  }
  const {name, projectId} = componentsByPath[plasmicLoaderPage];

  return <PlasmicLoader component={name} projectId={projectId} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      
        { params: { plasmicLoaderPage: ["home",] } },
      
        { params: { plasmicLoaderPage: ["post",] } },
      
    ],
    fallback: false,
  };
}
