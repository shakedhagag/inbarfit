const importAll = (context: __WebpackModuleApi.RequireContext) =>
  context.keys().map(context);
const screenshots = importAll(
  require.context("@/public/images/screenshots/", false, /\.(png|jpe?g|svg)$/),
);

export default screenshots;
