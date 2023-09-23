import Button from "../(components)/button/button";
import Header from "../(components)/header/header";
import Input from "../(components)/input/input";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const fetchServices = async () => {
    const blog = await client.fetch(`*[_type == "blogs"]`, {}, { cache: 'no-cache' });
    return blog;
};

const fetchServices2 = async () => {
    const post = await client.fetch(`*[_type == "postCatageries"]`, {}, { cache: 'no-cache' });
    return post;
};

// import Navbar from "../(components)/navbar/navbar";
import Image from "next/image";

async function Blog() {
    const blog = await fetchServices();
    const post = await fetchServices2()
    return (
        <>
            <Header title="OUR POST" />
            <section className="blog-content">
                <div className="row">
                    <div className="blog-left">
                        <h2>Our Certificate & Online Program</h2>
                        <h5>Aug 1, 2021</h5>
                        {
                            blog.map((blogs) => {
                                return (
                                    <>
                                        <Image src={urlForImage(blogs.image).url()} width={700} height={470} priority alt="" />
                                        <p>{blogs.description1}</p>
                                        <br />
                                        <p>{blogs.description2}</p>
                                        <br />
                                        <p>{blogs.description3}</p>
                                        <br />
                                        <p>{blogs.description4}</p>

                                    </>
                                )
                            })
                        }
                        {/* <Image src="/post.png" width={700} height={470} priority alt=""/> */}
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p> */}

                        <div className="comment-box">
                            <h3>Leave a Comment</h3>
                            <form className="comment-form">
                                <Input type="text" place="Enter Name" required />
                                <Input type="email" place="Enter Email" required />
                                <textarea rows="5" placeholder="Your Comment"></textarea>
                                <Button text='POST COMMENT' />

                            </form>
                        </div>
                    </div>

                    <div className="blog-right">
                        <h3>Post Categories</h3>
                        {
                            post.map((post) => {
                                return (
                                    <>
                                        <div>
                                            <span>{post.title}</span>
                                            <span>{post.number}</span>
                                        </div>
                                    </>
                                )
                            })
                        }
                        {/* <div>
                            <span>Business Analytics</span>
                            <span>12</span>
                        </div>
                        <div>
                            <span>Machine Learning</span>
                            <span>29</span>
                        </div>
                        <div>
                            <span>Computer Science</span>
                            <span>15</span>
                        </div>
                        <div>
                            <span>Data Analytics</span>
                            <span>22</span>
                        </div>
                        <div>
                            <span>Full Stack</span>
                            <span>20</span>
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    )
}
export default Blog;