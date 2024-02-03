import { StepSymbol } from ".";

export default {
  title: "Components/StepSymbol",
  component: StepSymbol,
  argTypes: {
    type: {
      options: ["numbered", "bullet", "icon", "checked"],
      control: { type: "select" },
    },
    state: {
      options: ["active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "01",
    type: "numbered",
    state: "active",
    typeNumberedStateClassName: {},
    numberClassName: {},
    circleClassName: {},
  },
};
