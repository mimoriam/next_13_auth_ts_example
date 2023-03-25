import { notFound } from "next/navigation";
import { backendURL } from "@/constants/constants";

type PageProps = {
  params: {
    bootcampId: string;
  };
};

const fetchBootcampById = async (bootcampId: string) => {
  const response = await fetch(`${backendURL}/bootcamps/${bootcampId}`, {
    next: { revalidate: 60 },
  });

  const bootcamp = await response.json();
  return bootcamp;
};

export default async function BootcampPage({
  params: { bootcampId },
}: PageProps) {
  const bootcamp = await fetchBootcampById(bootcampId);

  // console.log(bootcamp);

  if (!bootcamp.id) return notFound();

  return (
    <>
      <div>
        <p>
          #{bootcamp.id} : {bootcamp.name} -- {bootcamp.description}
        </p>
      </div>
    </>
  );
}
