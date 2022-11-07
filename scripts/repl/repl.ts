import repl from "node:repl";
import { regions } from "../../src/utils/regions";
import { metrics, MetricId, metricCatalog } from "../../src/utils/metrics";

const metricList = metricCatalog.metrics;

function init() {
  const replServer = repl.start({ prompt: "⚡️ ", useColors: true });

  replServer.defineCommand("metrics", {
    help: "List available metrics",
    action() {
      this.clearBufferedCommand();
      metricList.forEach((metric) => console.log(metric.id));
      console.log();
      this.displayPrompt();
    },
  });

  replServer.defineCommand("builtin", {
    help: "List builtin variables",
    action() {
      this.clearBufferedCommand();
      console.log("regions");
      console.log("MetricId");
      console.log("metricDefinitions");
      console.log("metricCatalog");
      console.log("metricIdList");
      metricList.forEach((metric) => console.log(metric.id));
      this.displayPrompt();
    },
  });

  function defineGlobal(name: string, value: unknown) {
    Object.defineProperty(replServer.context, name, {
      configurable: false,
      enumerable: true,
      value,
    });
  }

  defineGlobal("regions", regions);
  defineGlobal("MetricId", MetricId);
  defineGlobal("metricDefinitions", metrics);
  defineGlobal("metricCatalog", metricCatalog);
  metricList.forEach((metric) => defineGlobal(metric.id, metric));
}

init();
