import { ServicePage } from "@/components/ServicePage";

export const metadata = {
  title: "Mariage | Directed by Qamar",
};

export default function MariagePage() {
  return (
    <ServicePage
      title="Mariage"
      description="Des images fortes, élégantes et intemporelles pour raconter l’un des plus beaux jours de votre vie."
      heroImage="https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg"
      gallery={[
        "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
        "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
        "https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg",
      ]}
    />
  );
}
