import Link from "next/link";

const items = [
  {
    id: 1,
    title: "React.js 기초 강의",
    content:
      "이 강의에서는 React.js의 기초에 대해 배우게 됩니다. 자바스크립트와 HTML, CSS의 기초 지식이 필요합니다.",
  },
  {
    id: 2,
    title: "Next.js 심화 강의",
    content:
      "이 강의에서는 Next.js의 심화 내용을 다룹니다. React.js 기초 강의를 먼저 이수하시는 것을 권장드립니다.",
  },
  {
    id: 3,
    title: "TypeScript 강의",
    content:
      "이 강의에서는 TypeScript의 기초부터 심화 내용까지 배우게 됩니다. JavaScript의 기초 지식이 필요합니다.",
  },
  {
    id: 4,
    title: "JavaScript 실전 프로젝트 강의",
    content:
      "이 강의에서는 JavaScript를 이용한 실전 프로젝트를 진행하게 됩니다. JavaScript 기초 강의 이후에 이수하시는 것을 권장드립니다.",
  },
  {
    id: 5,
    title: "CSS 애니메이션 강의",
    content:
      "이 강의에서는 CSS를 이용해 다양한 애니메이션 효과를 만들어봅니다. CSS 기초 지식이 필요합니다.",
  },
  {
    id: 6,
    title: "HTML5 강의",
    content:
      "이 강의에서는 HTML5의 다양한 기능을 배우게 됩니다. 웹 개발에 필요한 기초 강의입니다.",
  },
  {
    id: 7,
    title: "REST API 강의",
    content:
      "이 강의에서는 REST API의 원리와 구현 방법에 대해 배우게 됩니다. JavaScript 또는 Python 기초 지식이 필요합니다.",
  },
  {
    id: 8,
    title: "GraphQL 강의",
    content:
      "이 강의에서는 GraphQL의 개념과 사용 방법에 대해 배우게 됩니다. REST API 강의 이후에 이수하시는 것을 권장드립니다.",
  },
  {
    id: 9,
    title: "Node.js 강의",
    content:
      "이 강의에서는 서버 사이드 JavaScript인 Node.js의 개념과 사용 방법에 대해 배우게 됩니다. JavaScript 기초 강의를 먼저 이수하시는 것을 권장드립니다.",
  },
  {
    id: 10,
    title: "React Native 강의",
    content:
      "이 강의에서는 모바일 앱을 개발하는 React Native에 대해 배우게 됩니다. React.js 기초 강의를 먼저 이수하시는 것을 권장드립니다.",
  },
];

const NoticeSection = () => {
  return (
    <section>
      {items.map((wikiPage) => (
        <Link href={`/wiki/${wikiPage.id}`} key={wikiPage.id}>
          {wikiPage.title}
        </Link>
      ))}
    </section>
  );
};

export default NoticeSection;
