import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Small: Story = {
  args: {
    size: "small",
    backgroundColor: "white",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    backgroundColor: "teal",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    backgroundColor: "black",
    children: "Large",
  },
};
