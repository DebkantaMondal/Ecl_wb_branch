export const publicItem = [
  { link: "/", title: "home", subMenu: [{ link: "/", title: "" }] },
  { link: "/", title: "about", subMenu: [{ link: "/", title: "" }] },
  { link: "/", title: "career", subMenu: [{ link: "/", title: "" }] },
  { link: "/", title: "contact us", subMenu: [{ link: "/", title: "" }] },
];
export const authItem = [
  {
    link: "/",
    title: "document Section",
    subMenu: [
      { link: "/", title: "all doc" },
      { link: "/", title: "cmd section" },
    ],
  },
  { link: "/", title: "UploadDoc", subMenu: [{ link: "/", title: "" }] },
  { link: "/", title: "changePassword", subMenu: [{ link: "/", title: "" }] },
  { link: "/", title: "searchDoc", subMenu: [{ link: "/", title: "" }] },
  {
    title: "logout",
    handleClick: function (e) {
      e.preventDefault();
      console.log("hi");
    },
    subMenu: [{ link: "/", title: "" }],
  },
];
