function loadScript(url) {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.src = url;
  script.type = "module";
  head.appendChild(script);
}

// loadScript("./map_filter_sort_reduce.js");
// loadScript("./filter.js");
// loadScript("./forEach.js");
// loadScript("./map.js");
// loadScript("./reduce.js");
// loadScript("./some.js");
// loadScript("./every.js");
// loadScript("./find.js");
loadScript("./findIndex.js");