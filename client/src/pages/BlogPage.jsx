import React from 'react'
import CommonNavbar from '../components/commonNav/CommonNavbar'
import Blog1 from '../components/Blog/Blog1'
import Blog2 from '../components/Blog/Blog2'
import Blogs from '../components/Blog/Blogs'
import BlogArticle from '../components/Blog/BlogArticle'
import Footer from '../components/Footer'


const BlogPage = () => {
  return (
   <>
   <CommonNavbar />
   <div className="w-full max-w-[1920px] mx-auto overflow-x-hidden px-4 md:px-6 lg:px-8">
     <Blog1/>
     <Blog2/>
     <Blogs />
     <BlogArticle />
   </div>
   <Footer/>
   </>
  )
}

export default BlogPage