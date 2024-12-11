import Image from 'next/image';

export default function Home() {
  return (
    // This wrapper div takes up the full width minus the sidebar
    <div className="flex-1 p-2 "> {/* flex-1 allows it to take remaining space */}
      <main className="flex flex-col w-full items-center space-y-4"> {/* w-full makes it take full width of parent */}
          <h1 className={`w-full text-center text-4xl`}>Phillip's Portfolio Website!</h1>
          <div className='grid grid-col-2'>
            <Image
              src = "/Casualin Japan.jpg"
              width = {200}
              height = {150}
              alt= "Image of Phillip in Tokyo, Japan!"
              style = {{
                borderRadius: '10%',
                border: '2px solid #000'
              }}
              className='col-span-1'
            />
            <p className='col-span-1'>
              This is where I am going to put my biographical information.
            </p>
          </div>
          
      </main>
      <footer className="bg-slate-500">
      </footer>
    </div>
  );
}