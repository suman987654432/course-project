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
   <  Blog1/>
   <Blog2/>
   <Blogs />
   <BlogArticle />
   <Footer/>
   </>
  )
}

export default BlogPage