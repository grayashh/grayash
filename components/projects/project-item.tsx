/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

interface ProjectData {
  properties: {
    Name: {
      title: {
        plain_text: string;
      }[];
    };
    Github: {
      url: string;
    };
    Description: {
      rich_text: {
        plain_text: string;
      }[];
    };
    Tags: {
      multi_select: {
        id: string;
        name: string;
      }[];
    };
    WorkPeriod: {
      date: {
        start: string;
        end: string;
      };
    };
  };
  cover: {
    external: {
      url: string;
    };
  };
}

export default function ProjectItem({ data }: { data: ProjectData }) {
  const title = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start: string, end: string) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      parseInt(startDateStringArray[0]),
      parseInt(startDateStringArray[1]) - 1,
      parseInt(startDateStringArray[2])
    );
    var endDate = new Date(
      parseInt(endDateStringArray[0]),
      parseInt(endDateStringArray[1]) - 1,
      parseInt(endDateStringArray[2])
    );

    const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h1 className="mt-4 text-xl">{description}</h1>
        <a href={githubLink}>깃허브 바로가기</a>
        <h1 className="mt-4 text-xl">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </h1>
        <div className="flex items-start mt-2 overflow-auto">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
