export default {
  head: {
    titleTemplate: "%s - Nuxt.js",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" },
    ],
  },
  css: ["~/assets/styles/global.sass"],

  modules: ["@nuxtjs/style-resources"],

  styleResources: {
    sass: ["./assets/styles/*.sass"],
  },
};
