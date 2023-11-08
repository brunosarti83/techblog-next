import Header from '@/components/Header/Header';
import './globals.css';

export const metadata = {
  title: 'TechBlog NEXT',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="p-5">{children}</div></body>
    </html>
  )
}
