# SCS_WikiPage

## Demo

![데모 영상](https://github.com/scs0209/SCS_WikiPage/assets/110822847/1da5f98f-013e-4835-9c3c-b6d29c771129)

## Installation

프로젝트를 시작하려면, 리포지토리를 클론하고 의존성을 설치하세요:

```bash
git clone https://github.com/scs0209/SCS_WikiPage.git

cd SCS_WikiPage

npm install
```

## Authors

|                                                            성창수                                                            |
| :--------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/jsdmas/jsdmas.github.io/assets/105098581/e237b4f3-26f3-4a37-8818-86787f5d858b" width="160px" /> |
|                                       [🙎🏻‍♂️ FE 팀원 : 창수](https://github.com/scs0209)                                        |

## 기술 스택

**Front-end**

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
- ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=Next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white)
- ![lucide-react](https://img.shields.io/badge/-lucide--react-47A3F3?logo=lucide-icons&logoColor=white)

**Text Editor**

- ![tiptap](https://img.shields.io/badge/-tiptap-blue?logo=tiptap&logoColor=white)

## 구현 기능

- 글 작성
- 글 수정
- 페이지네이션
- 본문에 다른 페이지의 제목이 있으면 자동으로 링크가 걸리고,클릭하면 해당 위키페이지로 이동

## 어려웠던 점

- 본문 내용에서 다른 페이지의 제목을 자동으로 링크로 변환하는 부분

  - 이를 해결하기 위해 아래와 같은 함수를 사용했습니다.

  ```typescript
  export const linkifyContent = (content: string, allItems: Item[]): string => {
    return allItems.reduce((linkedContent, item) => {
      const link = `<a href="/${item.id}" class="write-link">${item.title}</a>`;
      return linkedContent.replace(new RegExp(item.title, "g"), link);
    }, content);
  };
  ```

  이 함수는 모든 항목을 순회하면서 현재 항목의 제목이 본문 내용에 포함되어 있는지 확인한 후, 있으면 해당 제목을 대상 페이지로의 링크로 바꿉니다.

  이 함수를 통해 사용자가 다른 페이지를 쉽게 찾아갈 수 있도록 돕고, 새로운 게시물을 효과적으로 관리할 수 있게 해주었습니다.

  이번에 처음으로 이러한 기능을 구현해보면서 다음과 같은 내용을 배웠습니다.

  1. 텍스트와 데이터의 상호 변환: 사용자가 입력한 텍스트와 프로그램 내의 데이터 사이에서 정보를 효과적으로 전달하는 방법에 대해 배웠습니다. 이를 통해, 본문 내의 특정 텍스트를 찾아 해당 텍스트에 대응하는 데이터로의 링크를 생성하는 기능을 구현할 수 있습니다.

  2. 사용자 경험 개선: 사용자가 직접 링크를 입력하지 않아도, 본문 내의 특정 텍스트를 클릭하면 해당 텍스트에 대응하는 페이지로 이동할 수 있도록 하는 기능을 통해 사용자 경험을 개선하는 방법에 대해 배웠습니다. 이 기능은 사용자가 원하는 정보를 더 바르고 쉽게 찾을 수 있도록 도와줍니다.

## 고려한 점

- 코드를 작성하면서 다음과 같은 점을 고려하면서 작성하였습니다.

1. 폴더 간의 명확한 책임과 역할 부여
   코드 구조는 폴더 간의 명확한 책임과 역할에 초점을 맞추어 설계하였습니다. 각 폴더와 파일의 구조는 다음과 같습니다.
   ```
   app
    ┣ //...
    ┣ favicon.ico
    ┣ globals.css
    ┣ layout.tsx
    ┗ page.tsx
    Components
    ┣ HomePage
    ┃ ┣ NoticeListSection.tsx
    ┃ ┣ Pagination.tsx
    ┃ ┗ PaginationButton.tsx
    ┣ //...
    hooks
    ┣ useInput.ts
    ┗ useToggle.ts
    lib
    ┣ utils
    ┃ ┣ itemUtils.ts
    ┃ ┣ localStorageUtils.ts
    ┃ ┗ noticeUtils.ts
    ┗ interface.ts
   ```

- `app` 폴더: 전역 설정과 레이아웃에 관련된 파일들을 포함합니다.
- `Components` 폴더: 각각의 컴포넌트와 그에 관련된 로직을 담고 있습니다. 가능한 한 렌더링 로직만 포함하더로 작성되었습니다.
- `hooks` 폴더: 반복되는 로직이나 관심사를 분리하기 위해 커스텀 훅을 작성하였습니다.
- `lib` 폴더: 데이터 타입을 지정하는 interface와 유틸리티 함수나 비즈니스 로직을 포함하는 utils 폴더로 구성되어 있습니다.

  이렇게 구조화함으로써, 각 부분의 책임과 역활이 명확하게 분리되어 코드의 가독성과 유지보수성이 향상되었습니다.

2. 함수와 변수의 네이밍

- 로직을 폴더 별로 세부적으로 분리했기 때문에 컴포넌트에서 함수의 이름만 보아도 어떤 역할을 하는지에 대해서 정확히 알 수 있게 함수의 네이밍에 특별히 주의를 기울였습니다.
- 이렇게 각 함수의 이름만 보아도 해당 함수의 역할을 정확히 알 수 있도록 네이밍을 진행하였습니다. 이는 추후 리팩토링 과정에서도 큰 도움이 될 것으로 기대됩니다.
- 이런 방식의 네이밍 전략을 코드의 명확성을 높여주어, 개발자가 코드를 더 쉽게 이해하고 수정할 수 있게 만듭니다. 또한, 팀원이나 후속 작업자가 코드를 이해하는 데 드는 시간을 줄여주면, 잠재적인 오류를 미리 방지하는 효과도 있습니다.

3. 함수의 단일 책임 원칙 적용

- 코드의 가독성과 유지 보수성을 높이기 위해 `하나의 함수에는 하나의 기능(SRP)`만을 수행하도록 했습니다.
- 단일 책임 원칙을 적용함으로써 각 함수는 명확하게 한 가지 작업만을 수행하며, 그 목적과 역할이 명확해졌습니다.
- 이 결과, 코드의 가독성이 향상되었고, 각 함수가 수행하는 작업을 이해하기 쉬워지는 효과를 얻었습니다.
- 또한, 한 함수에서 발생할 수 있는 문제점을 쉽게 파악하고 수정할 수 있으며, 필요한 경우 함수의 추가나 제저도 간편하게 수행할 수 있기 문에, 개발 과정에서 겪을 수 있는 복잡성을 크게 줄일 수 있습니다.
