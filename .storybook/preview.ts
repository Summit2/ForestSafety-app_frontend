import type { Preview } from "@storybook/react";
import '!style-loader!css-loader!sass-loader!../src/assets/css/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
