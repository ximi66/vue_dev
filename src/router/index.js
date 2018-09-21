//about
const about = [{
  path: "/about",
  component: (resolve) => require(["@/components/about"], resolve)
}];
const routes = [...about];
export default routes;

