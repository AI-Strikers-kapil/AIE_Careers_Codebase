module.exports = function () {
    var instanceRoot = "C:\\inetpub\\wwwroot\\careers.workwave.com";
  var config = {
      websiteRoot: "C:\\inetpub\\wwwroot\\careers.workwave.com",
    sitecoreLibraries: instanceRoot + "\\bin",
      licensePath: "C:\\inetpub\\wwwroot\\careers.workwave.com\\App_Data\\license.xml",
    solutionName: "Habitat",
    buildConfiguration: "Debug",
    buildToolsVersion: 15.0,
    buildMaxCpuCount: 0,
    buildVerbosity: "minimal",
    buildPlatform: "Any CPU",
    publishPlatform: "AnyCpu",
    runCleanBuilds: false
  };
  return config;
}
