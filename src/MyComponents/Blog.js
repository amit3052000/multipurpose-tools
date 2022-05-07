import React from 'react';
import '../MyCSS/blog.css';

export default function Blog() {
  return (
      <>
    <div className='blog-body'>
        <div className='blog-header'>
            <div className="heading">
                <ul className='nav-left'>
                    <li>Home</li>
                    <li>Contact</li>
                </ul>
                <div className='nav-right'>
                    <div>ico1</div>
                    <div>ico1</div>
                    <div>ico1</div>
                    <div>ico1</div>
                    <div>Searchbar</div>
                </div>
            </div>
        </div><div className="logo">
            <div className="site-logo">BLOG</div>
            <div className='site-desc'>A personal Blog</div>
        </div>
        <div className='sider'>
            <div className="sider-elements">
                <>elements</>
            </div>
            <div className="sider-elements">
                <>elements</>
            </div>
            <div className="sider-elements">
                <>elements</>
            </div>
        </div>
        <div>Content</div>
        <div>asider</div>
    </div>
    </>
  )
}
