// These styles apply to every route in the application
import './globals.css'
 
export const metadata = {
  title: 'Dylan\'s Portfilio',
  description: 'Welcome to my personal portfolio',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}