import { Meta, StoryObj } from "@storybook/react";
import AccordionUI from "./Accordion";

const meta: Meta<typeof AccordionUI> = {
  title: "AccordionUI",
  component: AccordionUI,
};
export default meta;
type Story = StoryObj<typeof AccordionUI>;

export const Default: Story = {
  args: {
    multiple: true,
    style: "default",
    item: "item",
  },
};

export const SingleOpen: Story = {
  args: {
    multiple: false,
    style: "single",
    item: "item",
  },
};

export const Borders: Story = {
  args: {
    multiple: false,
    style: "single",
    item: "item",
    border: "border",
  },
};
