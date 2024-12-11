import Image from 'next/image';

export default function Home() {
  return (
    // This wrapper div takes up the full width minus the sidebar
    <div className="flex-1 p-2 "> {/* flex-1 allows it to take remaining space */}
      <main className="flex flex-col w-full items-center space-y-4"> {/* w-full makes it take full width of parent */}
        <h1 className="text-center text-4xl">Phillip's Portfolio Website!</h1>
        <div className="flex flex-row justify-center w-full space-x-4">
          <a className='hover:text-amber-900' href='https://www.linkedin.com/in/phillipkonstantinov'>LinkedIn</a>
          <span className="text-gray-500">|</span>
          <a className='hover:text-amber-900' href='mailto:phillipk0113@gmail.com'>phillipk0113@gmail.com</a>
          <span className="text-gray-500">|</span>
          <a className='hover:text-amber-900' href='tel:+16024020398'>(602) 402-0398</a>
        </div>
        <div className='flex flex-row w-full px-8 justify-center'>
          <Image
            src="/Casualin Japan.jpg"
            width={200}
            height={150}
            alt="Image of Phillip in Tokyo, Japan!"
            style={{
              borderRadius: '10%',
              border: '2px solid #000'
            }}
            className='place-self-center'
          />
          <p className='pl-4 pt-4'>
            This is where I am going to put my biographical information.
          </p>
        </div>

      </main>
      <footer className="bg-slate-500">
      </footer>
    </div>
  );
}