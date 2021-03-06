export default {
  helloWidget: {
    name: "helloWidget",
    title: "Hello",
    settings: [
      {
        label: "Message",
        value: "msg",
        type: "text",
      },
    ],
    url:
      "https://raw.githubusercontent.com/prifina/widgets/master/packages/hello/dist/main.bundle.js",
  },
  timelineWidget: {
    name: "timelineWidget",
    title: "TimeLine",
    settings: [],
    url:
      "https://raw.githubusercontent.com/prifina/widgets/master/packages/google-timeline/dist/main.bundle.js",
  },
  watchWidget: {
    name: "watchWidget",
    title: "Watch",
    url:
      "https://raw.githubusercontent.com/prifina/widgets/master/packages/watch/dist/main.bundle.js",
  },
  weatherWidget: {
    name: "weatherWidget",
    title: "Weather",
    url:
      "https://raw.githubusercontent.com/prifina/widgets/master/packages/weather/dist/main.bundle.js",
  },
  fileDropWidget: {
    name: "fileDropWidget",
    title: "FileDrop",
    url:
      "https://raw.githubusercontent.com/prifina/widgets/master/packages/file-drop/dist/main.bundle.js",
  },
};
