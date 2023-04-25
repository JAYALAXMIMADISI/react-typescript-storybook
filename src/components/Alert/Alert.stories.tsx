import { Meta, StoryObj } from "@storybook/react";
import AlertUi from "./Alert";

const meta: Meta<typeof AlertUi> = {
  title: "AlertUI",
  component: AlertUi,
};
export default meta;
type Story = StoryObj<typeof AlertUi>;

export const Warning: Story = {
  args: {
    children: "Seems your account is about expire, upgrade now",
    status: "warning",
    style: "alert",
  },
};

export const Error: Story = {
  args: {
    children: "There was an error processing your request",
    status: "error",
    style: "alert",
  },
};

export const Success: Story = {
  args: {
    children: "Data uploaded to the server. Fire on!",
    status: "success",
    style: "alert",
  },
};

export const Message: Story = {
  args: {
    children: "Chakra is going live on August 30th. Get ready!",
    status: "info",
    style: "alert",
  },
};
