import { useProps } from "./userProps";
import { Layout } from "./Layout";

export const Header = () => {
  return <Layout {...useProps()} />;
};
