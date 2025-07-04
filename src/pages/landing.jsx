import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import componies from "../data/companies.json"
import faq from "../data/faq.json"
import Autoplay from 'embla-carousel-autoplay'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>Find your dream job <span className='flex items-center gap-2 sm:gap-6'>and get <img src="/logo (2).png" alt="" className='h-14 sm:h-24 lg:h-32'/></span></h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>Explore thousand of job listings or find the perfect job</p>
      </section>
      <div className='flex gap-6 justify-center'>
        {/*Buttons*/}
        <Link to='/job'>
          <Button variant="blue" size="xl">
            Find jobs
          </Button>
        </Link>
        <Link to='/post-job'>
          <Button variant="destructive" size="xl">
            Post job
          </Button>
        </Link>
      </div>
      <Carousel
      plugins={[Autoplay({ delay: 2000})]}
      className="w-full py-10"
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {componies.map(({name,id,path})=>{
          return <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
            <img src={path} alt={name} className='h-9 sm:h-14 object-contain'/>
          </CarouselItem>
        })}
      </CarouselContent>
    </Carousel>
      {/*Banner*/}
        <img src="/banner.jpeg" alt="" className=''/>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/*cards */}
        <Card>
          <CardHeader>
            <CardTitle>For job seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply job, track application and more
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For employeers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, Manage applications, and find the best employees
          </CardContent>
        </Card>
      </section>
      {/*Accordian*/}
      <Accordion type="single" collapsible>
        {faq.map((faq,index)=>{
          return  <AccordionItem key={index} value={`item-${index+1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        })}
        
      </Accordion>
    </main>
  )
}

export default LandingPage