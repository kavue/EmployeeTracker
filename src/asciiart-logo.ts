declare module 'asciiart-logo' {
  export default function config(options: {
    name?: string;
    font?: string;
    lineChars?: number;
    padding?: number;
    margin?: number;
    borderColor?: string;
    logoColor?: string;
    textColor?: string;
  }): {
    render: () => string;
    emptyLine: () => any;
    right: (text: string) => any;
  };
}
