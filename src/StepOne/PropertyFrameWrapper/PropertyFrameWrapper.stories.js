import { PropertyFrameWrapper } from ".";

export default {
  title: "Components/PropertyFrameWrapper",
  component: PropertyFrameWrapper,
  argTypes: {
    property1: {
      options: ["frame-1871", "frame-1870"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-1871",
    className: {},
    vuesaxLinearArrow: "https://c.animaapp.com/tLweR9GB/img/vuesax-linear-arrow-left.svg",
    text: "Button",
  },
};
