import { Select } from ".";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    property1: {
      options: ["rectangle-12", "rectangle-10"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "rectangle-12",
    className: {},
  },
};
