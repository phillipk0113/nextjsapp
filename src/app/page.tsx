import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import {
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent
} from '@/components/ui/card'

export default function Home() {
  return (
    // This wrapper div takes up the full width minus the sidebar
    <div className="flex-1 p-2"> {/* flex-1 allows it to take remaining space */}
      <main className="flex flex-col items-center space-y-8"> {/* w-full makes it take full width of parent */}
        <h1 className="text-center text-4xl">Phillip Konstantinov Konstantinov</h1>
        <div className="flex flex-row justify-center w-full space-x-2">
          <a className='hover:text-amber-900' href='https://www.linkedin.com/in/phillipkonstantinov'>LinkedIn</a>
          <span className="text-gray-500">|</span>
          <a className='hover:text-amber-900' href='mailto:phillipk0113@gmail.com'>phillipk0113@gmail.com</a>
          <span className="text-gray-500">|</span>
          <a className='hover:text-amber-900' href='tel:+16024020398'>(602) 402-0398</a>
          <span className="text-gray-500">|</span>
          <a className='hover:text-amber-900' href='https://github.com/phillipk0113'>GitHub</a>
        </div>
        <div className='flex flex-col w-2/3 px-8 justify-center items-center lg:flex-row'>
          <Image
                src="/Casual in Japan.jpg"
                width={300}
                height={225}
                alt="Image of Phillip in Tokyo, Japan!"
                style={{
                  borderRadius: '10%',
                  border: '2px solid #000'
                }}
                className='md:w-200 md:h-150'
              />
          <div className='flex flex-col max-w-sm md:max-w-md lg:max-w-lg pt-8 md:pt-0 pl-0 md:pl-10'>
            <h2 className='font-bold text-left'>Bio</h2>
            <p className='text-left'>
              Hi! My name is Phillip Konstantinov. This website is a personal project. It is to showcase some of the fun things that I have done, share some of my thoughts, and showcase 
              some of the software development that I have been working on. I am an early career professional who has Bachelor's degrees in Computer Science and Finance from Barrett, 
              the Honors College at Arizona State university. Most of my professional experience is within consulting with a bit of experience as a front-end developer. I am a Phoenix, 
              Arizona local and soon to be transplant to Los Angeles, CA. Wish me luck!
            </p>
          </div>
        </div>
        
        <h1 className='text-center text-4xl '>Travel Highlights</h1>
        <Carousel className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-5'>
          <CarouselContent>
            <CarouselItem>
              <Card className='p-4'>
                <CardTitle className='text-center'>Image One</CardTitle>
                <CardHeader>Where do you go?</CardHeader>
                <CardContent>What exactly is this going to look like?</CardContent>
                <CardDescription>So you should be text but I think the one above should be an image</CardDescription>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className='p-4'>
                <CardTitle className='text-center'>Image Two</CardTitle>
                <CardContent>What exactly is this going to look like?</CardContent>
                <CardDescription>So you should be text but I think the one above should be an image</CardDescription>
              </Card>
            </CarouselItem>
            
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </main>
    </div>
  );
}