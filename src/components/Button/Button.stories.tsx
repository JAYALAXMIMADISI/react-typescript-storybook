import React from "react";
import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryA: Story = {
  args: {
    variant: "primary",
    children: "Primary Args",
  },
};

export const LongPrimaryA: Story = {
  args: {
    variant: "long primary",
    children: "Long Primary Args",
  },
};

export const SecondaryA: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Args",
  },
};
