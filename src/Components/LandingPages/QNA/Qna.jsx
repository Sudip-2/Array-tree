import { React, useState } from 'react'
import SecondPageHeading from '../SecondPage/secondPageHeading'
import Accordion from './Accordion';

const Qna = () => {

    return (
        <>
            <div className='min-h-svh bg-ThirdPageBgClr py-20'>
                <div className='mx-6'>

                    <div className='text-center'>
                        <SecondPageHeading text={"Got questions?"} clr={"text-ThirdPagetextClr"} />
                    </div>

                    <Accordion titleQ={"Why do I need a link in bio tool?"} ans={`Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.`} />

                    <Accordion titleQ={"Can you get paid and sell things from a Arraytree?"} ans={`Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your Linktree.A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase. With Paypal or Square right in your Linktree, your customers won’t even need to leave your social media to go to another site and pay!`} />

                    <Accordion titleQ={"Is Arraytree safe to use on all of my social media profiles?"} ans={`Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.`} />

                    <Accordion titleQ={"What makes Linktree better than the other link in bio options?"} ans={`We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Let’s hear what they have to say:“Four months into creating, someone messaged me like: You need a Linktree. I can’t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Linktree set up, I was like, oh my god – why did I spend $100 on a website? I don’t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman”It’s so much easier to set up and have all of your links in one place in a well designed format.” – Catie T”Websites are cool (I have one) but Linktrees just make it so much easier.” – Tan Nguyen“I love their analytics. Other link-in-bio companies don’t provide extensive data on what’s going on.” – Riley LemonLinktree invented the bio link tool in 2016, and it continues to be the world’s most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Linktree today and see for yourself!`} />

                    <Accordion titleQ={"How can I drive more traffic to and through my Arraytree?"} ans={`Sharing your Linktree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.Once visitors arrive on your Linktree, easy-to-understand analytics help you quickly and easily discover where they’re coming from, and what they’re clicking on. You can immediately see what’s working and what’s not and improve your Linktree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!`} />

                    <Accordion titleQ={"How many links should I have on my Arraytree?"} ans={`This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.You can use features on Linktree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first.`} />
                    
                    <Accordion titleQ={"Do I need a website to use Arraytree?"} ans={`No, you don’t! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Linktree.`} />

                </div>
            </div>
        </>
    )
}

export default Qna