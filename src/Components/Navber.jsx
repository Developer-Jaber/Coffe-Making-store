import React from 'react'
import logo from '../img/logo1.png'
import { Link } from 'react-router-dom'

const Navber = () => {
    const link = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li >
            <Link to='about_us'>About Us</Link>
        </li>
        <li>
            <Link to='contact_us'>Contact Us</Link>
        </li>
    </>
  return (
    <div className='bg-my-image mx-auto w-10/12 navbar'>
      <div className='navbar-start'>
        <img src={logo} className='w-14' alt="" />
        <a className='font-bold text-3xl text-white'>Espresso Emporium</a>
      </div>
      <div className='lg:flex hidden navbar-center'>
        <ul className='px-1 text-2xl text-white menu menu-horizontal'>
          {
            link
          }
        </ul>
      </div>
      <div className='gap-5 navbar-end'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-circle btn-ghost'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-7 h-7 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>0</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className='z-[1] bg-base-100 shadow mt-3 w-52 card card-compact dropdown-content'
          >
            <div className='card-body'>
              <span className='font-bold text-lg'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn-block btn btn-primary'>View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='avatar btn btn-circle btn-ghost'
          >
            <div className='rounded-full w-10'>
              <img
                alt='Tailwind CSS Navbar component'
                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navber
