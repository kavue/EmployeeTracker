declare module 'asciiart-logo' {
  // Define the LogoConfig interface based on the options you're passing to config
  export interface LogoConfig {
    name: string;
    font: string;
    lineChars: number;
    padding: number;
    margin: number;
    borderColor: string;
    logoColor: string;
    textColor: string;
  }

  export default function config(options: LogoConfig): {
    render: () => string;
    emptyLine: () => any;
  };
}
