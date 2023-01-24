import { ComponentMeta, ComponentStory } from "@storybook/react";

import Logo from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Example = Template.bind({});
Example.args = { imgUrl: "/cms/media/placeholderlogo.png", width: 60 };
