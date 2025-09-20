import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-100% h-screen flex justify-center align-middle flex-col text-center'>
      <h2>Такой страницы нет</h2>
      <Link href="/" className='text-sm text-contrast-low'>На главную</Link>
    </div>
  )
}