import "./globals.css";

//this is predefined font Inten for this project we can also  use custom fonts from google
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import { Montserrat } from "next/font/google";

// create object of custom fonts from google
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  // we can create fontfamily in tailwind.config.js using this variable open that file and see inside extend:{}
  variable: "--font-montserrat",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* like that we can import it into class  */}
      {/* <body className={inter.className}> */}
      <body className={`${montserrat.className} mx-8 my-12`}>
        {/* <nav>
          <h1>logo</h1> */}
        {/* from tailwind css we got it  */}
        {/* <ul className="font-montserrat">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
