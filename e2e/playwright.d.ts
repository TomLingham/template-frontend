declare module NodeJS {
  interface Global {
    Page: import("playwright").Page;
    TestId(id: string): ReturnType<import("playwright").Page["$"]>;
  }
}

declare var Page: import("playwright").Page;
declare function TestId(id: string): ReturnType<import("playwright").Page["$"]>;
