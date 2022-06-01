// rollup.config.js
import replace from "@rollup/plugin-replace";

export default (commandLineArgs) => {
  return {
    input: "src/index.js",
    output: {
      dir: "dist/index.js",
      format: "cjs",
    },
    plugins: [
      replace({
        "process.env.STAGE": JSON.stringify(commandLineArgs.stage),
      }),
    ],
  };
};
