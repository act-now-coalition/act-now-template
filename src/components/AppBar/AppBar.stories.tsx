import { ComponentStory, ComponentMeta } from "@storybook/react";
import AppBar from "./AppBar";

export default {
  title: "Components/AppBar",
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Example = Template.bind({});
Example.args = {};
