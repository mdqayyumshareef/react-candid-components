import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  disabled: false,
  label: "Secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
  label: "Disabled",
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  disabled: false,
  size: "small",
  label: "Small",
};

export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  label: "Medium",
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  label: "Large",
};