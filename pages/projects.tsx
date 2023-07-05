import Head from "next/head";
import ProjectItem from "../components/projects/project-item";
import { TOKEN, DATABASE_ID } from "../config/index";

export interface ProjectProps {
  projects: {
    results: {
      id: string;
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
    }[];
  };
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
      <Head>
        <title>Grayash`s Portfolio</title>
        <meta name="description" content="Kang's Portflolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold sm:text-6xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 py-10 m-6 gap-8 w-70">
        {projects.results.map((aProject) => (
          <ProjectItem key={aProject.id} data={aProject} />
        ))}
      </div>
    </div>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [
        {
          property: "WorkPeriod",
          direction: "descending",
        },
      ],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects },
  };
}
