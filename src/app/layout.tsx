import Navbar from "../components/Navbar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="crt">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
