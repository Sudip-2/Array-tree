import React from 'react'
import { Link } from 'react-router-dom'

const FooterLink = ({text,link}) => {
    return (
        <div className='mt-3'>
            <Link to={`${link}`} className='text-sm text-navLinkGrey'>{text}</Link>
        </div>
    )
}

export default FooterLink