import { ComponentStory, ComponentMeta } from "@storybook/react";
import AppBar from "./AppBar";

export default {
  title: "Components/AppBar",
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const ExampleWithDefaultColor = Template.bind({});
ExampleWithDefaultColor.args = {};

export const ExampleWithPrimaryColor = Template.bind({});
ExampleWithPrimaryColor.args = { color: "primary" };

export const ExampleWithSecondaryColor = Template.bind({});
ExampleWithSecondaryColor.args = { color: "secondary" };
