import { backendURL } from "@/constants/constants";
import Link from "next/link";

const fetchBootcamps = async () => {
  const response = await fetch(`${backendURL}/bootcamps/`, {
    next: { revalidate: 60 },
  });

  const bootcamps = await response.json();
  return bootcamps;
};

export default async function BootcampsList() {
  const bootcamps = await fetchBootcamps();

  // console.log(bootcamps);

  return (
    <>
      {bootcamps.data.map((bootcamp: any) => (
        <p key={bootcamp.id}>
          <Link href={`/bootcamps/${bootcamp.id}`}>
            Bootcamp: {bootcamp.id} - {bootcamp.name}
          </Link>
        </p>
      ))}
    </>
  );
}

export async function generateStaticParams() {
  const response = await fetch(`${backendURL}/bootcamps/`);

  const bootcamps = await response.json();

  return bootcamps.data.map((bootcamp: any) => ({
    id: bootcamp.id.toString(),
  }));
}
