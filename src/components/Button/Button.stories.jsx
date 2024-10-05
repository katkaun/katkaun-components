import Button from "./Button";
import {action} from "@storybook/addon-actions";

export default {
  title: "katkaun-components/components/Button",
  component: Button,
};

export const Default = {
  args: {
    title: "Click me!",
    onClick: action("button-clicked"),  
  },
};

export const NoTitle = {
  args: {
    title: "Default",
    onClick: action("button-clicked"),  
  },
};