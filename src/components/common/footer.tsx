function Footer() {
  const getCurrentYear = new Date().getFullYear()

  return (
    <footer className='mt-10 sm:px-20 px-10 
      py-5 z-10 flex justify-center'>
      <div className=''>
        <p className="dark:text-white text-black font-normal sm:text-sm text-xs truncate">
          © {getCurrentYear} Heaven Dave Ancheta. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer