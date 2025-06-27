import { BIZ_UDPGothic, Open_Sans } from "next/font/google";

//Base Japanese Font
const fontBaseJp = BIZ_UDPGothic(
  {
    subsets : ["cyrillic", "greek-ext", "latin", "latin-ext"],
    weight  : ["400", "700"],
    variable: "--font-base-jp",
    display : "swap",
  }
);

//Base English Font
const fontBaseEn = Open_Sans(
  {
    subsets : ["cyrillic", "greek-ext", "latin", "latin-ext", "cyrillic-ext", "greek", "hebrew", "math", "symbols", "vietnamese"],
    weight  : ["300", "400", "500", "600", "700", "800"],
    variable: "--font-base-en",
    display : "swap",
  }
);

const fontsBase = `${fontBaseJp.variable} ${fontBaseEn.variable} fonts-sans antialiased`;
export default fontsBase;