import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import TreeOptions from "@/components/TreeOptions";

export default function Home() {
  return (
    <main className='flex flex-col justify-center mx-96'>
      <Hero />
      <Grid />
      {/* <TreeOptions /> */}
    </main>
  );
}
