const importAll = (context: __WebpackModuleApi.RequireContext) =>
  context.keys().map(context);
const workoutTypes = importAll(
  require.context(
    "@/public/images/workoutTypes/",
    false,
    /\.(png|jpe?g|JPG|svg)$/,
  ),
);

export default workoutTypes;
