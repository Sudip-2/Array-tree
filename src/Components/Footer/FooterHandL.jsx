import React from 'react'
import Footerheading from './Footerheading'
import FooterLink from './FooterLink'

const FooterHandL = ({text,arr}) => {
    return (
        <div>
            <Footerheading text={text} />

            <div className=''>
                {arr.map((item, index) => {
                    return <FooterLink text={item.text} link={item.link} key={index} />
                })}
            </div>
        </div>
    )
}

export default FooterHandL