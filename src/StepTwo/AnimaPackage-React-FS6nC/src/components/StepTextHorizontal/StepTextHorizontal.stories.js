import { StepTextHorizontal } from ".";

export default {
  title: "Components/StepTextHorizontal",
  component: StepTextHorizontal,
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
    leadingText: true,
    type: "numbered",
    state: "active",
    className: {},
    stepSymbolCircleClassName: {},
    stepSymbolTypeNumberedStateClassName: {},
    stepSymbolNumberClassName: {},
  },
};
